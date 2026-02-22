import { Field, Float, Int, ObjectType } from "type-graphql";
import { Quiz } from "./Quiz";
import { Level } from "./Level";
import { Theme } from "./Theme";

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
export class UserGrowthData {
	@Field()
	period: string;

	@Field(() => Int)
	count: number;
}

@ObjectType()
export class AttemptsSuccessRate {
	@Field(() => Int)
	passed: number;

	@Field(() => Int)
	failed: number;

	@Field(() => Float)
	successRate: number;

	@Field(() => Int)
	total: number;
}

// ➕ NOUVEAUX TYPES pour les tops
@ObjectType()
export class TopQuizStat {
	@Field(() => Quiz)
	quiz: Quiz;

	@Field(() => Int)
	attemptCount: number;
}

@ObjectType()
export class TopLevelStat {
	@Field(() => Level)
	level: Level;

	@Field(() => Int)
	attemptCount: number;
}

@ObjectType()
export class TopThemeStat {
	@Field(() => Theme)
	theme: Theme;

	@Field(() => Int)
	attemptCount: number;
}

@ObjectType()
export class GlobalStats {
	@Field(() => NewUsersStats)
	newUsers: NewUsersStats;

	@Field(() => [UserGrowthData])
	userGrowth: UserGrowthData[];

	@Field(() => AttemptsSuccessRate)
	attemptsSuccessRate: AttemptsSuccessRate;

	@Field(() => Float)
	averageScore: number;

	// ➕ NOUVEAUX CHAMPS
	@Field(() => [TopQuizStat])
	topQuizzes: TopQuizStat[];

	@Field(() => [TopLevelStat])
	topLevels: TopLevelStat[];

	@Field(() => [TopThemeStat])
	topThemes: TopThemeStat[];
}
