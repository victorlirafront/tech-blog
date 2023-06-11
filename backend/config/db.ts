import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "blog",
  port: 3306
});

export default db;
