import { load } from "ts-dotenv";

export default load({
  GRAPHQL_SERVER_PORT: Number,
  CORS_ALLOWED_ORIGINS: String,
  NODE_ENV: String,
  JWT_SECRET: String,
  DB_HOST: String,
  DB_NAME: String,
  DB_PORT: Number,
  DB_USER: String,
  DB_PASS: String
});
