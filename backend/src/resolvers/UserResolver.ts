import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { LoginInput, SignupInput, User } from "../entities/User";
import { GraphQLError } from "graphql/error";
import { hash, verify } from "argon2";
import { GraphQLContext } from "../types";
import { startSession } from "../auth";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users() {
    return User.find();
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
  
  @Mutation(() => String)
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
      throw new GraphQLError("Pseudo ou mot de passe incorect", {
        extensions: {code: "INVALID_CREDENTIALS", http: { status: 401}},
      });
    }

    return startSession(context, user);
  }
}

