import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
} from "./config.js";

//conexión con la base de datos
const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

export default pool;
