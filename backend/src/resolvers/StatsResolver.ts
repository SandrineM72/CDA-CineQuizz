import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import { Attempt } from "../entities/Attempt";
import { Quiz } from "../entities/Quiz";
import { Level } from "../entities/Level";
import { Theme } from "../entities/Theme";
import { 
	GlobalStats, 
	NewUsersStats, 
	AttemptsSuccessRate, 
	UserGrowthData,
	TopQuizStat,
	TopLevelStat,
	TopThemeStat
} from "../entities/Stats";
import { MoreThanOrEqual } from "typeorm";

@Resolver()
export default class StatsResolver {
	@Query(() => GlobalStats)
	async globalStats(): Promise<GlobalStats> {
		// Calculate date ranges
		const now = new Date();
		const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
		const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
		const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

		// New users by period
		const newUsersWeek = await User.count({
			where: {
				created_at: MoreThanOrEqual(weekAgo),
			},
		});

		const newUsersMonth = await User.count({
			where: {
				created_at: MoreThanOrEqual(monthAgo),
			},
		});

		const newUsersYear = await User.count({
			where: {
				created_at: MoreThanOrEqual(yearAgo),
			},
		});

		const newUsers: NewUsersStats = {
			week: newUsersWeek,
			month: newUsersMonth,
			year: newUsersYear,
		};

		// User growth by month (last 3 months only)
		const userGrowth: UserGrowthData[] = [];
		for (let i = 2; i >= 0; i--) {
			const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
			const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
			
			// Count users created in this specific month using query builder
			const usersInMonth = await User.createQueryBuilder("user")
				.where("user.created_at >= :startDate", { startDate: date })
				.andWhere("user.created_at < :endDate", { endDate: nextMonth })
				.getCount();

			userGrowth.push({
				period: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
				count: usersInMonth,
			});
		}

		// Attempts success rate
		const allAttempts = await Attempt.find();
		let passedCount = 0;
		let failedCount = 0;

		allAttempts.forEach((attempt) => {
			if (attempt.passed) {
				passedCount++;
			} else {
				failedCount++;
			}
		});

		const totalAttempts = passedCount + failedCount;
		const successRate = totalAttempts > 0 
			? Number(((passedCount / totalAttempts) * 100).toFixed(1))
			: 0;

		const attemptsSuccessRate: AttemptsSuccessRate = {
			passed: passedCount,
			failed: failedCount,
			successRate,
			total: totalAttempts,
		};

		// Average score
		const totalScore = allAttempts.reduce((sum, attempt) => sum + attempt.percentage_success, 0);
		const averageScore = allAttempts.length > 0 ? totalScore / allAttempts.length : 0;

		// ➕ NOUVEAU : Top 5 Quiz les plus joués
		const topQuizzesRaw = await Attempt.createQueryBuilder("attempt")
			.select("quiz.id", "quizId")
			.addSelect("COUNT(attempt.id)", "attemptCount")
			.leftJoin("attempt.quiz", "quiz")
			.groupBy("quiz.id")
			.orderBy('"attemptCount"', "DESC")
			.limit(5)
			.getRawMany();

		const topQuizzes: TopQuizStat[] = await Promise.all(
			topQuizzesRaw.map(async (item) => {
				const quiz = await Quiz.findOne({
					where: { id: item.quizId },
					relations: ["level", "theme", "questions"]
				});
				return {
					quiz: quiz!,
					attemptCount: parseInt(item.attemptCount),
				};
			})
		);

		// ➕ NOUVEAU : Top 5 Levels les plus joués
		const topLevelsRaw = await Attempt.createQueryBuilder("attempt")
			.select("level.id", "levelId")
			.addSelect("COUNT(attempt.id)", "attemptCount")
			.leftJoin("attempt.quiz", "quiz")
			.leftJoin("quiz.level", "level")
			.groupBy("level.id")
			.orderBy('"attemptCount"', "DESC")
			.limit(5)
			.getRawMany();

		const topLevels: TopLevelStat[] = await Promise.all(
			topLevelsRaw.map(async (item) => {
				const level = await Level.findOne({
					where: { id: item.levelId },
					relations: ["quizzes"]
				});
				return {
					level: level!,
					attemptCount: parseInt(item.attemptCount),
				};
			})
		);

		// ➕ NOUVEAU : Top 5 Themes les plus joués
		const topThemesRaw = await Attempt.createQueryBuilder("attempt")
			.select("theme.id", "themeId")
			.addSelect("COUNT(attempt.id)", "attemptCount")
			.leftJoin("attempt.quiz", "quiz")
			.leftJoin("quiz.theme", "theme")
			.groupBy("theme.id")
			.orderBy('"attemptCount"', "DESC")
			.limit(5)
			.getRawMany();

		const topThemes: TopThemeStat[] = await Promise.all(
			topThemesRaw.map(async (item) => {
				const theme = await Theme.findOne({
					where: { id: item.themeId },
					relations: ["quizzes"]
				});
				return {
					theme: theme!,
					attemptCount: parseInt(item.attemptCount),
				};
			})
		);

		return {
			newUsers,
			userGrowth,
			attemptsSuccessRate,
			averageScore: Math.round(averageScore * 100) / 100,
			topQuizzes,
			topLevels,
			topThemes,
		};
	}
}
