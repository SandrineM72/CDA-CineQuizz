import { User } from "./entities/User";
import jwt from "jsonwebtoken";
import env from "./env";
import { GraphQLContext } from "./types";
import { UnauthenticatedError } from "./entities/errors";

const cookieName = "authToken"; // nom cookie

export interface JWTPayload{ // interface pour le payload du JWT (ici, on aura une propriété id pour l'id de l'user connecté)
    userId: number;
}

export async function createJWT(user: User): Promise<string>{
    const payload: JWTPayload = {       // création payload pour le jwt avec l'id de l'user passé en param
        userId: user.id                
    };
    console.log("payload dans createJWT() : ", payload);
    
    return jwt.sign(payload, env.JWT_SECRET, {expiresIn: "7d"}); // renvoi du token généré
}

export async function startSession(context: GraphQLContext, user: User){
    const token = await createJWT(user);  // génération du token (le payload contient l'id du user courant)
    console.log("token renvoyé par la fn createJWT : ", token);

    context.res.cookie(cookieName, token, {  // création du cookie (avec le nom "authToken") pour porter le token
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
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
    const token = context.req.cookies?.[cookieName]; // récupération du cookie "authToken" depuis tous les cookies présent dans la requête
    if (!token) return null;
    const payload = verifyJWT(token); // récupération payload
    if (!payload) return null;
    return payload; // renvoie le payload extrait du token
}

export async function getCurrentUser(context: GraphQLContext): Promise<User> {
    const jwt = await getJWT(context);
    console.log("infos du jwt récupéré via getJWT() : ", jwt);
    if (jwt === null) throw new UnauthenticatedError();
    const currentUser = await User.findOne({where: {id: jwt.userId}});
    if (currentUser === null) throw new UnauthenticatedError();
    console.log("current user renvoyé depuis getCurrentUser() : ", currentUser); // à ce niveau, on a toutes les infos du user courant
    return currentUser;    
}

export async function endSession(context: GraphQLContext) {
    context.res.clearCookie(cookieName);  // on supprime le cookie authToken donc plus de token exploitable (plus de connexion pour le user)
}
