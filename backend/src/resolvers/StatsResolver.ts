import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import { Attempt } from "../entities/Attempt";
import { 
	GlobalStats, 
	NewUsersStats, 
	AttemptsSuccessRate, 
	UserGrowthData 
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
				count: usersInMonth, // New users in this month
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

		return {
			newUsers,
			userGrowth,
			attemptsSuccessRate,
			averageScore: Math.round(averageScore * 100) / 100, // Round to 2 decimal places
		};
	}
}
