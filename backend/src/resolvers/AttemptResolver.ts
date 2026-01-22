import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { AnswerInput, Attempt } from "../entities/Attempt";
import { Quiz } from "../entities/Quiz";
import { User } from "../entities/User";
import { GraphQLError } from "graphql/error";
import { GraphQLContext } from "../types";
import { getJWT } from "../auth";

// Helper function to get the authenticated user or use the dedicated guest user
// The guest user is specifically created without admin rights to prevent security issues
async function getUserOrDefault(context: GraphQLContext): Promise<User> {
	try {
		const jwt = await getJWT(context);
		if (jwt) {
			const user = await User.findOne({ where: { id: jwt.userId } });
			if (user) return user;
		}
	} catch {
		// If no authentication, use the dedicated guest user
	}
	
	// Use the dedicated guest user as fallback (no admin rights)
	// This prevents unauthenticated visitors from accidentally getting admin privileges
	const guestUser = await User.findOne({ where: { pseudo: "GuestUser" } });
	if (!guestUser) {
		throw new GraphQLError("Guest user not found. Please run database reset.", {
			extensions: { code: "INTERNAL_ERROR", http: { status: 500 } },
		});
	}
	return guestUser;
}

@Resolver()
export default class AttemptResolver {
	@Query(() => Attempt, { nullable: true })
	async attempt(
		@Arg("id", () => Int) id: number
	): Promise<Attempt | null> {
		return Attempt.findOne({
		where: { id },
		relations: ["user", "quiz", "quiz.questions"],
		});
	}

	@Query(() => [Attempt])
	async attemptsByQuiz(
		@Arg("quizId") quizId: number,
		@Ctx() context: GraphQLContext
	): Promise<Attempt[]> {
		const user = await getUserOrDefault(context);
		return await Attempt.find({
			where: {
				quiz: { id: quizId },
				user: { id: user.id },
			},
			relations: ["quiz"],
			order: { started_at: "DESC" },
		});
	}

	@Mutation(() => Attempt)
	async createAttempt(
		@Arg("quizId", () => Int) quizId: number,
		@Arg("answers", () => [AnswerInput]) answers: AnswerInput[],
		@Arg("duration", () => Int) duration: number,
		@Ctx() context: GraphQLContext
	): Promise<Attempt> {
	const user = await getUserOrDefault(context);

	const quiz = await Quiz.findOne({
		where: { id: quizId },
		relations: ["questions", "questions.choices"],
	});

	if (!quiz) {
		throw new GraphQLError("Quiz not found", {
		extensions: { code: "NOT_FOUND", http: { status: 404 } },
		});
	}

	if (!quiz.questions.length) {
		throw new GraphQLError("Quiz has no questions");
	}

	let score = 0;

	for (const question of quiz.questions) {
		const userAnswer = answers.find(
		(a) => a.questionId === question.id
		);

		const correctChoice = question.choices.find(
		(c) => c.is_correct
		);

		if (
		userAnswer &&
		correctChoice &&
		userAnswer.choiceId === correctChoice.id
		) {
		score++;
		}
	}

	const percentageSuccess =
		(score / quiz.questions.length) * 100;

	const passed = percentageSuccess >= 70;

	const attempt = await Attempt.create({
		user,
		quiz,
		score,
		percentage_success:
		Math.round(percentageSuccess * 100) / 100, // 2 décimales
		passed,
		duration,
		started_at: new Date(Date.now() - duration * 1000),
		finished_at: new Date(),
	}).save();

	return attempt;
}



	@Query(() => Attempt, { nullable: true })
	async lastAttemptByQuiz(
		@Arg("quizId") quizId: number,
		@Ctx() context: GraphQLContext
	): Promise<Attempt | null> {
		const user = await getUserOrDefault(context);
		return await Attempt.findOne({
			where: {
				quiz: { id: quizId },
				user: { id: user.id },
			},
			relations: ["quiz", "user", "quiz.questions"],
			order: { finished_at: "DESC" },
		});
	}
}

