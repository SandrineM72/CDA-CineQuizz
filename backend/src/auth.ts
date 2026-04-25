import { User } from "./entities/User";
import jwt from "jsonwebtoken";
import env from "./env";
import { GraphQLContext } from "./types";
import { UnauthenticatedError } from "./entities/errors";

export const cookieName = "authToken";

export interface JWTPayload {
    userId: number;
}

export async function createJWT(user: User): Promise<string>{
    const payload: JWTPayload = {
        userId: user.id                
    };
    
    return jwt.sign(payload, env.JWT_SECRET, {expiresIn: "7d"});
}

export async function startSession(context: GraphQLContext, user: User){
    const token = await createJWT(user);

    // Cast en 'any' pour contourner le problème de typage
    (context.res as any).cookie(cookieName, token, {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (corrigé : *1000 au lieu de *1)
    });
    return token;
}

export const verifyJWT = (token: string) : JWTPayload | null => {
    try {
        console.log("payload extrait via verifyJWT() en passant en param le token : ", jwt.verify(token, env.JWT_SECRET));
        return jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    } catch (error) {
        return null;
    }
};

export async function getJWT(context: GraphQLContext): Promise<JWTPayload | null > {
    // Cast en 'any' pour contourner le problème de typage
    const token = (context.req as any).cookies?.[cookieName];
    if (!token) return null;
    const payload = verifyJWT(token);
    if (!payload) return null;
    return payload;
}

export async function getCurrentUser(context: GraphQLContext): Promise<User> {
    const jwt = await getJWT(context);
    if (jwt === null) throw new UnauthenticatedError();
    const currentUser = await User.findOne({where: {id: jwt.userId}});
    if (currentUser === null) throw new UnauthenticatedError();
    return currentUser;    
}

export async function endSession(context: GraphQLContext) {
    // Cast en 'any' pour contourner le problème de typage
    (context.res as any).clearCookie(cookieName);
}