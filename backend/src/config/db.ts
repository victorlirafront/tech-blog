import mysql from 'mysql2/promise'; // Note que estou usando a versão 'promise' do mysql2
require('dotenv').config();

export const pool = mysql.createPool({
  host: process.env.HOST!,
  user: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  database: process.env.DATABASE!,
  port: parseInt(process.env.PORT!, 10),
  waitForConnections: true, // Espera por uma conexão disponível, caso o pool esteja cheio
  connectionLimit: 10, // Define o número máximo de conexões no pool
  queueLimit: 0, // Sem limite para a fila de conexões
});

pool.getConnection()
  .then(connection => {
    console.log('Connected successfully to the database!');
    connection.release(); // Libera a conexão de volta ao pool
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
