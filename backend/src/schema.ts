import { buildSchema } from "type-graphql"; 
import UserResolver from "./resolvers/UserResolver";


export async function getSchema() {
return buildSchema({
    resolvers: [UserResolver],
});
}