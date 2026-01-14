import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Quiz } from "../entities/Quiz";
import { getCurrentUser } from "../auth";
import { GraphQLContext, AgeRange } from "../types";


@Resolver()
export default class QuizResolver {
	@Query(() => Quiz, { nullable: true })
	async quiz(@Arg("id", () => Number) id: number) {
		return await Quiz.findOne({
			where: { id },
			relations: ["questions", "questions.choices", "category", "decade", "liked_by"],
		});
	}

	@Query(() => [Quiz])
	async quizzes() {
		const publicQuizzes = await Quiz.find({
			where: { is_public: true, is_draft: false },
			relations: ["category", "decade"],
		});
		console.log(`Nombre de quizzes publics trouvés: ${publicQuizzes.length}`);
		return publicQuizzes;
	}

	@Query(() => [Quiz])
	async privateQuizzes(
		@Ctx() context: GraphQLContext,
		@Arg("categoryId", () => Number, { nullable: true }) categoryId?: number,
		@Arg("decadeId", () => Number, { nullable: true }) decadeId?: number
	) {
		console.log(`[privateQuizzes] Paramètres reçus - categoryId: ${categoryId}, decadeId: ${decadeId}`);
		
		// Get the connected user (from the initialized GraphQl context) in order to obtain their age range
		const currentUser = await getCurrentUser(context);
		const userAgeRange = currentUser.age_range;
		console.log(`[privateQuizzes] Tranche d'âge de l'utilisateur: ${userAgeRange}`);
		
		const queryBuilder = Quiz.createQueryBuilder("quiz")
			.where("quiz.is_public = :isPublic", { isPublic: false })
			.andWhere("quiz.is_draft = :isDraft", { isDraft: false })
			.leftJoinAndSelect("quiz.category", "category")
			.leftJoinAndSelect("quiz.decade", "decade")
			.leftJoinAndSelect("quiz.liked_by", "liked_by");
        
		// Set up conditional dynamic filters on categoryId and decadeId
		if (categoryId) {
			queryBuilder.andWhere("category.id = :categoryId", { categoryId });
			console.log(`[privateQuizzes] Filtre par catégorie appliqué: ${categoryId}`);
		}

		if (decadeId) {
			queryBuilder.andWhere("decade.id = :decadeId", { decadeId });
			console.log(`[privateQuizzes] Filtre par décennie appliqué: ${decadeId}`);
		}

		// Filter by user age range
		// Logic: a quiz is visible if its age_range matches or is less restrictive than the user's
		// - "tous publics" : visible by everyone
		// - "-12" : visible by users with "-12" or "tous publics"
		// - "-16" : visible by users with "-16", "-12" or "tous publics"
		if (userAgeRange === AgeRange.MOINS_12) {
			// User -12 : can see "tous publics" and "-12"
			queryBuilder.andWhere("(quiz.age_range = :tousPublics OR quiz.age_range = :moins12)", {
				tousPublics: AgeRange.TOUS_PUBLICS,
				moins12: AgeRange.MOINS_12,
			});
			console.log(`[privateQuizzes] Filtre par tranche d'âge appliqué: utilisateur -12`);
		} else if (userAgeRange === AgeRange.MOINS_16) {
			// User -16 : can see "tous publics", "-12" and "-16"
			queryBuilder.andWhere("(quiz.age_range = :tousPublics OR quiz.age_range = :moins12 OR quiz.age_range = :moins16)", {
				tousPublics: AgeRange.TOUS_PUBLICS,
				moins12: AgeRange.MOINS_12,
				moins16: AgeRange.MOINS_16,
			});
			console.log(`[privateQuizzes] Filtre par tranche d'âge appliqué: utilisateur -16`);
		} else {
			// User "tous publics" : can see all quizzes
			console.log(`[privateQuizzes] Aucun filtre par tranche d'âge (utilisateur tous publics)`);
		}
        
		// Execute the query to retrieve private quizzes
		const privateQuizzes = await queryBuilder.getMany();
		console.log(`[privateQuizzes] Nombre de quizzes privés trouvés: ${privateQuizzes.length}`);
		return privateQuizzes;
	}
}

