import mysql from 'mysql2';
require('dotenv').config();

export const connection = mysql.createConnection({
  host: process.env.HOST!,
  user: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  database: process.env.DATABASE!,
  port: parseInt(process.env.PORT!, 10),
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected successfully to the database!');
});

// Use a conexão aqui para realizar suas consultas, inserções, atualizações, etc.
