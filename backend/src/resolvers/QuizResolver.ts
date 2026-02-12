import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Quiz, UpdateQuizInput } from "../entities/Quiz";
import { getCurrentUser } from "../auth";
import { GraphQLContext } from "../types";
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
				"theme",
				"level",
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
			relations: ["theme", "level", "questions"],
		});
	}

	@Query(() => [Quiz])
	async getPublicQuizzes() {
		return Quiz.find({
			where: {
				is_public: true,
				is_draft: false,
			},
			relations: ["theme", "level", "questions"],
			order: { created_at: "DESC" },
		});
	}

	//  NON CONNECTED USER
	@Query(() => Quiz, { nullable: true })
	async nextPublicQuiz(
		@Arg("currentQuizId", () => Int) currentQuizId: number
	): Promise<Quiz | null> {
		return Quiz.createQueryBuilder("quiz")
			.leftJoinAndSelect("quiz.questions", "questions")
			.leftJoinAndSelect("quiz.theme", "theme")
			.leftJoinAndSelect("quiz.level", "level")
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
			.leftJoinAndSelect("quiz.questions", "questions")
			.leftJoinAndSelect("quiz.theme", "theme")
			.leftJoinAndSelect("quiz.level", "level")
			.where("quiz.id > :currentQuizId", { currentQuizId })
			.andWhere("quiz.is_draft = false")
			.orderBy("quiz.id", "ASC")
			.getOne();
	}

	@Query(() => [Quiz])
	async privateQuizzes(
		@Ctx() context: GraphQLContext,
		@Arg("themeId", () => Int, { nullable: true }) themeId?: number,
		@Arg("levelId", () => Int, { nullable: true }) levelId?: number
	) {
		await getCurrentUser(context); // Vérifie que l'utilisateur est connecté

		const queryBuilder = Quiz.createQueryBuilder("quiz")
			.where("quiz.is_public = false")
			.andWhere("quiz.is_draft = false")
			.leftJoinAndSelect("quiz.theme", "theme")
			.leftJoinAndSelect("quiz.level", "level")
			.leftJoinAndSelect("quiz.questions", "questions")
			.leftJoinAndSelect("quiz.liked_by", "liked_by");

		if (themeId) {
			queryBuilder.andWhere("theme.id = :themeId", { themeId });
		}

		if (levelId) {
			queryBuilder.andWhere("level.id = :levelId", { levelId });
		}

		return queryBuilder.getMany();
	}

	@Query(() => [Quiz])
	async allQuizzes() {
		return Quiz.find({
			relations: ["theme", "level", "questions", "liked_by"],
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
			relations: ["theme", "level", "questions"]
		});

		if (!quizToUpdate) throw new GraphQLError("quiz not found", { extensions: { code: "NOT_FOUND", http: { status: 404 } } });

		Object.assign(quizToUpdate, data);
		await quizToUpdate.save();

		return "Quiz modifié correctement";
	}
}
