import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Question, UpdateQuestionInput } from "../entities/Question";
import { GraphQLError } from "graphql/error";

@Resolver()
export default class QuestionResolver {
    @Mutation(() => String)
    async updateQuestion(@Arg("id", () => Int) id: number, @Arg("data", () => UpdateQuestionInput, {validate: true}) data: UpdateQuestionInput) {
        const questionToUpdate = await Question.findOne({
            where: {id: id},
        })
        

        if(!questionToUpdate) throw new GraphQLError("question not found", { extensions: { code: "NOT_FOUND", http: { status: 404 } } });
      
        Object.assign(questionToUpdate, data);

        await questionToUpdate.save();
        return "question modifiée correctement";
    }
}