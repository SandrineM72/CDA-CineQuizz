import { Arg, Ctx, Mutation, Query, Resolver, Int } from "type-graphql";
import { LoginInput, SignupInput, UpdateUserInput, User } from "../entities/User";
import { GraphQLError } from "graphql/error";
import { hash, verify } from "argon2";
import { GraphQLContext } from "../types";
import { endSession, getCurrentUser, startSession } from "../auth";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users() {
    return User.find({
      relations: ["attempts", "attempts.quiz"],
      order: { id: "ASC" },
    });
  }

  @Mutation(() => User)
  async signup(
    @Arg("data", () => SignupInput, { validate: true }) data: SignupInput,
  ) {
    let existingUser = await User.findOne({where: {email: data.email}});
    if (existingUser) {
      throw new GraphQLError("Un utilisateur avec cet email existe déjà", {
        extensions : { code: "EMAIL_ALREADY_TAKEN", http:{status: 400}},
      });
    }
    existingUser = await User.findOne({where: {pseudo: data.pseudo}});
    if (existingUser) {
      throw new GraphQLError("Un utilisateur avec ce pseudo existe déjà", {
        extensions : { code: "PSEUDO_ALREADY_TAKEN", http:{status: 400}},
      });
    }
    const hashedPassword = await hash(data.password);
    const newUser = User.create({ ...data, hashedPassword});
    return await newUser.save();
  }
  
  @Mutation(() => User)
  async login(
    @Arg("data", () => LoginInput, { validate: true}) data: LoginInput, 
    @Ctx() context: GraphQLContext,
  ) {
    const user = await User.findOne({ where: {pseudo: data.pseudo}});
    if(!user){
      throw new GraphQLError("Le Pseudo n'existe pas chez nous", {
        extensions: {code: "INVALID_CREDENTIALS", http: { status: 401}},
      });
    }

    const isValidPassword = await verify(user.hashedPassword, data.password);
    if(!isValidPassword){
      throw new GraphQLError("Pseudo ou mot de passe incorrect", {
        extensions: {code: "INVALID_CREDENTIALS", http: { status: 401}},
      });
    }

    // Mettre à jour last_login
    user.last_login = new Date();
    await user.save();

    // Créer la session
    await startSession(context, user);
    
    // Retourner l'objet User complet (avec is_admin)
    return user;
  }

  @Query(() => User, {nullable:true})
  async me(@Ctx() context: GraphQLContext){
    try {
      return await getCurrentUser(context)
    } catch (error) {
      console.error(error)
    }
    return null
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() context: GraphQLContext) {
    endSession(context);
    return true;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("data", () => UpdateUserInput, { validate: true }) data: UpdateUserInput,
    @Ctx() context: GraphQLContext,
  ) {
    // Vérifier que l'utilisateur est connecté
    const currentUser = await getCurrentUser(context);
    if (!currentUser) {
      throw new GraphQLError("Vous devez être connecté pour modifier votre profil", {
        extensions: { code: "UNAUTHORIZED", http: { status: 401 }},
      });
    }

    // Récupérer l'utilisateur complet depuis la base
    const user = await User.findOne({ where: { id: currentUser.id } });
    if (!user) {
      throw new GraphQLError("Utilisateur introuvable", {
        extensions: { code: "USER_NOT_FOUND", http: { status: 404 }},
      });
    }

    // Vérifier le mot de passe actuel
    const isValidPassword = await verify(user.hashedPassword, data.password);
    if (!isValidPassword) {
      throw new GraphQLError("Mot de passe incorrect", {
        extensions: { code: "INVALID_PASSWORD", http: { status: 401 }},
      });
    }

    // Mettre à jour le pseudo si fourni
    if (data.pseudo && data.pseudo !== user.pseudo) {
      // Vérifier que le nouveau pseudo n'est pas déjà utilisé
      const existingUser = await User.findOne({ where: { pseudo: data.pseudo } });
      if (existingUser) {
        throw new GraphQLError("Ce pseudo est déjà utilisé", {
          extensions: { code: "PSEUDO_ALREADY_TAKEN", http: { status: 400 }},
        });
      }
      user.pseudo = data.pseudo;
    }

    // 👇 NOUVEAU : Mettre à jour l'email si fourni
    if (data.email && data.email !== user.email) {
      // Vérifier que le nouvel email n'est pas déjà utilisé
      const existingUser = await User.findOne({ where: { email: data.email } });
      if (existingUser) {
        throw new GraphQLError("Cet email est déjà utilisé", {
          extensions: { code: "EMAIL_ALREADY_TAKEN", http: { status: 400 }},
        });
      }
      user.email = data.email;
    }

    // Mettre à jour l'avatar si fourni
    if (data.avatar) {
      user.avatar = data.avatar;
    }

    // Mettre à jour le mot de passe si fourni
    if (data.newPassword) {
      user.hashedPassword = await hash(data.newPassword);
    }

    // Sauvegarder les modifications
    await user.save();

    return user;
  }

  @Mutation(() => String)
  async deleteUser(@Arg("id", () => Int) id: number): Promise<string> {
    const user = await User.findOne({ where: { id } });
    
    if (!user) {
      throw new GraphQLError("Utilisateur introuvable", {
        extensions: { code: "USER_NOT_FOUND", http: { status: 404 }},
      });
    }
    
    await user.remove();
    return "Utilisateur supprimé avec succès";
  }
}
