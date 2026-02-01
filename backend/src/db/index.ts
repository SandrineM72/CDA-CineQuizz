import { DataSource } from "typeorm";
import env from "../env";

export default new DataSource({
  type: "postgres",
  database: env.DB_NAME,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  entities: ["src/entities/*.ts"],
  synchronize: true,
  //logging: true
});
