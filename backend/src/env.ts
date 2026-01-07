import { load } from "ts-dotenv";

export default load({
  GRAPHQL_SERVER_PORT: Number,
  CORS_ALLOWED_ORIGINS: String,
  NODE_ENV: String,
  JWT_SECRET: String
});
