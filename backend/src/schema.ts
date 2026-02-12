import { buildSchema } from "type-graphql"; 
import UserResolver from "./resolvers/UserResolver";
import QuizResolver from "./resolvers/QuizResolver";
import AttemptResolver from "./resolvers/AttemptResolver";
import QuestionResolver from "./resolvers/QuestionResolver";
import ChoiceResolver from "./resolvers/ChoiceResolver";
import StatsResolver from "./resolvers/StatsResolver";
import LevelResolver from "./resolvers/LevelResolver";
import ThemeResolver from "./resolvers/ThemeResolver";


export async function getSchema() {
return buildSchema({
    resolvers: [UserResolver, QuizResolver, LevelResolver, ThemeResolver, AttemptResolver, QuestionResolver, ChoiceResolver, StatsResolver],
});
}