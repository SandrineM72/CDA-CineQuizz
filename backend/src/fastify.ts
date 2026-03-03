import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import env from "./env";
import fastifyCookie from "@fastify/cookie";



export async function initFastify() {
    const fastify = Fastify();
    //     const origin = [
    //     'http://localhost:3001',
    //     'http://localhost:3002',
    //     'http://localhost:3000'
    // ];
    const origin = env.CORS_ALLOWED_ORIGINS.split(",");
    await fastify. register(fastifyCors, { origin, credentials: true }); 
    await fastify. register(fastifyCookie);
    return fastify;
}