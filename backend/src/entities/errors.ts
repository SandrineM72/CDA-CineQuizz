import { GraphQLError } from "graphql/error";


export class UnauthenticatedError extends GraphQLError {
    constructor(params?: {message?: string}) {
        super(params?.message || "Vous devez vous connecter pour accéder à cette opération", {
            extensions: {code: "UNAUTHENTICATED", http: {status : 401}},
        })
    }
}