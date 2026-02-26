import { Field, ObjectType, Int, Float } from "type-graphql";

@ObjectType()
export class UserPersonalStats {
	@Field(() => Float)
	totalSuccessRate: number; // Taux de réussite en %

	@Field(() => Int)
	totalQuizzesPassed: number; // Nombre de quiz réussis

	@Field(() => Int)
	totalQuizzesAttempted: number; // Nombre de quiz joués (uniques)

	@Field(() => Int)
	totalQuizzesAvailable: number; // Nombre total de quiz dans la BDD (30)

	@Field(() => Float)
	completionRate: number; // Pourcentage de quiz joués par rapport au total disponible
}
