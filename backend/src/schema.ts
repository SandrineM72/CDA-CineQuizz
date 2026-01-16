import { buildSchema } from "type-graphql"; 
import UserResolver from "./resolvers/UserResolver";
import DecadeResolver from "./resolvers/DecadeResolver";
import CategoryResolver from "./resolvers/CategoryResolver";
import QuizResolver from "./resolvers/QuizResolver";
import AttemptResolver from "./resolvers/AttemptResolver";


export async function getSchema() {
return buildSchema({
    resolvers: [UserResolver, QuizResolver, DecadeResolver, CategoryResolver, AttemptResolver],
});
}