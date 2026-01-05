import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { SignupInput, User } from "../entities/User";
import { GraphQLError } from "graphql/error";
import { hash } from "argon2";

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
      const existingUser = await User.findOne({where: {email: data.email}});
      if (existingUser) {
        throw new GraphQLError("Un utilisateur avec cet email existe déjà", {
          extensions : { code: "EMAIL_ALREADY_TAKEN", http:{status: 400}},
        });
      }
      const hashedPassword = await hash(data.password);
      const newUser = User.create({ ...data, hashedPassword});
      return await newUser.save();
    }
}

