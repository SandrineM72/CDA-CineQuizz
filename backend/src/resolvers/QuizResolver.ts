import { Arg, Ctx, Query, Resolver, Int } from "type-graphql";
import { Quiz } from "../entities/Quiz";
import { getCurrentUser } from "../auth";
import { GraphQLContext, AgeRange } from "../types";

@Resolver(() => Quiz)
export default class QuizResolver {
	@Query(() => Quiz, { nullable: true })
	async quiz(@Arg("id", () => Int) id: number) {
		return Quiz.findOne({
			where: { id },
			relations: [
				"questions",
				"questions.choices",
				"category",
				"decade",
				"liked_by",
			],
		});
	}

	@Query(() => [Quiz])
	async quizzes() {
		return Quiz.find({
			where: { is_public: true, is_draft: false },
			relations: ["category", "decade"],
		});
	}

	@Query(() => [Quiz])
	async getPublicQuizzes() {
		return Quiz.find({
			where: {
				is_public: true,
				is_draft: false,
			},
			relations: ["category", "decade"],
			order: { created_at: "DESC" },
		});
	}

	//  NON CONNECTED USER
	@Query(() => Quiz, { nullable: true })
	async nextPublicQuiz(
		@Arg("currentQuizId", () => Int) currentQuizId: number
	): Promise<Quiz | null> {
		return Quiz.createQueryBuilder("quiz")
			.where("quiz.id > :currentQuizId", { currentQuizId })
			.andWhere("quiz.is_public = true")
			.andWhere("quiz.is_draft = false")
			.orderBy("quiz.id", "ASC")
			.getOne();
	}

	// CONNECTED USER	
	@Query(() => Quiz, { nullable: true })
	async nextQuiz(
		@Arg("currentQuizId", () => Int) currentQuizId: number
	): Promise<Quiz | null> {
		return Quiz.createQueryBuilder("quiz")
			.where("quiz.id > :currentQuizId", { currentQuizId })
			.andWhere("quiz.is_draft = false")
			.orderBy("quiz.id", "ASC")
			.getOne();
	}

	@Query(() => [Quiz])
	async privateQuizzes(
		@Ctx() context: GraphQLContext,
		@Arg("categoryId", () => Int, { nullable: true }) categoryId?: number,
		@Arg("decadeId", () => Int, { nullable: true }) decadeId?: number
	) {
		const currentUser = await getCurrentUser(context);
		const userAgeRange = currentUser.age_range;

		const queryBuilder = Quiz.createQueryBuilder("quiz")
			.where("quiz.is_public = false")
			.andWhere("quiz.is_draft = false")
			.leftJoinAndSelect("quiz.category", "category")
			.leftJoinAndSelect("quiz.decade", "decade")
			.leftJoinAndSelect("quiz.liked_by", "liked_by");

		if (categoryId) {
			queryBuilder.andWhere("category.id = :categoryId", { categoryId });
		}

		if (decadeId) {
			queryBuilder.andWhere("decade.id = :decadeId", { decadeId });
		}

		if (userAgeRange === AgeRange.MOINS_12) {
			queryBuilder.andWhere(
				"(quiz.age_range = :tous OR quiz.age_range = :moins12)",
				{
					tous: AgeRange.TOUS_PUBLICS,
					moins12: AgeRange.MOINS_12,
				}
			);
		} else if (userAgeRange === AgeRange.MOINS_16) {
			queryBuilder.andWhere(
				"(quiz.age_range IN (:...ranges))",
				{
					ranges: [
						AgeRange.TOUS_PUBLICS,
						AgeRange.MOINS_12,
						AgeRange.MOINS_16,
					],
				}
			);
		}

		return queryBuilder.getMany();
	}
}
