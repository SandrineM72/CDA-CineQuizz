import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { GraphQLError } from "graphql/error";
import { Choice, UpdateChoiceInput } from "../entities/Choice";


@Resolver()
export default class ChoiceResolver {
    @Mutation(() => String)
    async updateChoice(@Arg("id", () => Int) id: number, @Arg("data", () => UpdateChoiceInput, {validate: true}) data: UpdateChoiceInput) {
        const choiceToUpdate = await Choice.findOne({
            where: {id: id},
        })

        if(!choiceToUpdate) throw new GraphQLError("choice not found", { extensions: { code: "NOT_FOUND", http: { status: 404 } } });
      
        Object.assign(choiceToUpdate, data);

        await choiceToUpdate.save();
        return "choix modifié correctement";
    }
}