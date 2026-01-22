import { Field, Int, ObjectType } from "type-graphql";
import type { AgeRange } from "../types";

@ObjectType()
export class UserAgeDistribution {
	@Field()
	age_range: AgeRange;

	@Field(() => Int)
	count: number;

	@Field()
	percentage: number;

	@Field()
	formattedLabel: string;
}

@ObjectType()
export class AttemptsSuccessRate {
	@Field(() => Int)
	passed: number;

	@Field(() => Int)
	failed: number;

	@Field()
	successRate: number;

	@Field(() => Int)
	total: number;
}

@ObjectType()
export class UserGrowthData {
	@Field()
	period: string; // "2024-01", "2024-W01", etc.

	@Field(() => Int)
	count: number;
}

@ObjectType()
export class NewUsersStats {
	@Field(() => Int)
	week: number;

	@Field(() => Int)
	month: number;

	@Field(() => Int)
	year: number;
}

@ObjectType()
export class GlobalStats {
	@Field(() => NewUsersStats)
	newUsers: NewUsersStats;

	@Field(() => [UserAgeDistribution])
	ageDistribution: UserAgeDistribution[];

	@Field(() => [UserGrowthData])
	userGrowth: UserGrowthData[];

	@Field(() => AttemptsSuccessRate)
	attemptsSuccessRate: AttemptsSuccessRate;

	@Field()
	averageScore: number;
}
