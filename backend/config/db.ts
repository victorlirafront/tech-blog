import mysql2 from 'mysql2';
require('dotenv').config();

interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

const dbConfig: DatabaseConfig =  {
  host: process.env.HOST!,
  user: process.env.USER!,
  password: process.env.PASSWORD!,
  database: process.env.DATABASE!,
  port: parseInt(process.env.PORT!, 10),
};

const db = mysql2.createConnection(dbConfig);

export default db;
