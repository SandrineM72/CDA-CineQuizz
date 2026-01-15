import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Attempt } from "../entities/Attempt";
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
	async attempt(@Arg("id") id: number): Promise<Attempt | null> {
		return await Attempt.findOne({
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
		@Arg("quizId") quizId: number,
		@Arg("score") score: number,
		@Arg("duration") duration: number,
		@Ctx() context: GraphQLContext
	): Promise<Attempt> {
		const user = await getUserOrDefault(context);
		const quiz = await Quiz.findOne({ 
			where: { id: quizId },
			relations: ["questions"],
		});

		if (!quiz) {
			throw new GraphQLError("Quiz not found", {
				extensions: { code: "NOT_FOUND", http: { status: 404 } },
			});
		}

		const totalQuestions = quiz.questions?.length || 0;
		const percentageSuccess = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
		const passed = percentageSuccess >= 70; // Success threshold at 70%

		const attempt = await Attempt.create({
			user,
			quiz,
			started_at: new Date(Date.now() - duration * 1000), // Calculate start time from duration
			finished_at: new Date(),
			score,
			percentage_success: Math.round(percentageSuccess * 100) / 100, // Round to 2 decimal places
			duration,
			passed,
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

