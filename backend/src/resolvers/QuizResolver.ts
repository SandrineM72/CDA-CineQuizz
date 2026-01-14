import { Query, Resolver } from "type-graphql";
import { Quiz } from "../entities/Quiz";

@Resolver()
export default class QuizResolver {
  @Query(() => [Quiz])
  async getPublicQuizzes() {
    return Quiz.find({
      where: {
        is_public: true,
        is_draft: false,
      },
      relations: ["category", "decade"],
      order: {
        created_at: "DESC",
      },
    });
  }
}