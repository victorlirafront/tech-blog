import mysql, { ConnectionConfig } from 'mysql';
require('dotenv').config();

interface DatabaseConfig extends ConnectionConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

const dbConfig: DatabaseConfig = {
  host: process.env.HOST!,
  user: process.env.USER!,
  password: process.env.PASSWORD!,
  database: process.env.DATABASE!,
  port: parseInt(process.env.PORT!, 10),
};

const db = mysql.createConnection(dbConfig);

export default db;
