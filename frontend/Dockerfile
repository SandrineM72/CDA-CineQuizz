FROM node:24.11-alpine3.23

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY .env ./.env
COPY src ./src
COPY public ./public
COPY next.config.ts ./next.config.ts
COPY next-env.d.ts ./next-env.d.ts
COPY postcss.config.mjs ./postcss.config.mjs
COPY tsconfig.json ./tsconfig.json

CMD ["npm", "run", "dev"]
