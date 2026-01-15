import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Quiz } from "../entities/Quiz";
import { getCurrentUser } from "../auth";
import { GraphQLContext, AgeRange } from "../types";

@Resolver(() => Quiz)
export default class QuizResolver {
	/* =======================
	   Single quiz by ID
	   ======================= */
	@Query(() => Quiz, { nullable: true })
	async quiz(@Arg("id", () => Number) id: number) {
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

	/* =======================
	   All public quizzes (simple)
	   ======================= */
	@Query(() => [Quiz])
	async quizzes() {
		return Quiz.find({
			where: { is_public: true, is_draft: false },
			relations: ["category", "decade"],
		});
	}

	/* =======================
	   Public quizzes (ordered)
	   ======================= */
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

	/* =======================
	   Private quizzes (filtered)
	   ======================= */
	@Query(() => [Quiz])
	async privateQuizzes(
		@Ctx() context: GraphQLContext,
		@Arg("categoryId", () => Number, { nullable: true }) categoryId?: number,
		@Arg("decadeId", () => Number, { nullable: true }) decadeId?: number
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

		// Age range filtering
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
