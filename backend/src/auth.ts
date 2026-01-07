import { User } from "./entities/User";
import jwt from "jsonwebtoken";
import env from "./env";
import { GraphQLContext } from "./types";


const cookieName = "authToken"

export interface JWTPayload{
    userId: number;
}

export async function createJWT(user: User): Promise<string>{
    const payload: JWTPayload = {
        userId: user.id,
    };

    return jwt.sign(payload, env.JWT_SECRET, {expiresIn: "7d"});
}

export async function startSession(context: GraphQLContext, user: User){
    const token = await createJWT(user);

    context.res.cookie(cookieName, token, {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days

    });

    return token;
}


