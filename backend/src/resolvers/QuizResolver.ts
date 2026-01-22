import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Quiz, UpdateQuizInput } from "../entities/Quiz";
import { getCurrentUser } from "../auth";
import { GraphQLContext, AgeRange } from "../types";
import { GraphQLError } from "graphql/error";

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
			order: {
				id: "ASC",
				questions: {id: "ASC", choices: {id: "ASC"}}  // pour un ordre affiché cohérent dans admin/games/1 par ex
			}
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

	@Query(() => [Quiz])
	async allQuizzes() {
		return Quiz.find({
			relations: ["category", "decade", "questions", "liked_by"],
			order: {
				id: "ASC"
			},
		});
	}

	@Mutation(() => String)
	async deleteQuiz(@Arg("id", () => Int) id: number) {
		const quizToDelete = await Quiz.findOneBy({id});
		if(!quizToDelete) {
			throw new GraphQLError("Quiz not found", {extensions : { code: "NOT_FOUND", http: { status: 404 } } }); 
		}
		await quizToDelete.remove();
		return "Quiz supprimé";
	}

	@Mutation(() => String)
	async updateQuiz(@Arg("id", () => Int) id: number, @Arg("data", () => UpdateQuizInput, {validate: true}) data: UpdateQuizInput ) {
		const quizToUpdate = await Quiz.findOne({
			where: {id: id},
			relations: ["category", "decade", "questions"]
		});

		if (!quizToUpdate) throw new GraphQLError("quiz not found", { extensions: { code: "NOT_FOUND", http: { status: 404 } } });

		Object.assign(quizToUpdate, data);
		await quizToUpdate.save();

		return "Quiz modifié correctement";
	}
}
