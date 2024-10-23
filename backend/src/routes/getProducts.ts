import { pool } from '../config/db';
import express from 'express';

const router = express.Router();

const paginatedResults = function (model: any) {
  return (req: any, res: any, next: any) => {
    const page: number = Number(req.query.page) || 1;
    const limit: number = Number(req.query.limit) || 10;
    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;
    const results: any = {};

    if (endIndex < model.length) {
      results.next = { page: page + 1, limit: limit };
    }

    if (startIndex > 0) {
      results.previous = { page: page - 1, limit: limit };
    }

    model.reverse();
    results.totalPages = model.length / limit;
    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  };
};

router.get('/get', async (req: any, res: any) => {
  const category: string = String(req.query.category) || 'all';

  try {
    const connection = await pool.getConnection(); // Obtém uma conexão do pool
    
    let query = 'SELECT * FROM posts';
    let params: any[] = [];

    if (category !== 'all' && category) {
      query += ' WHERE category = ?';
      params = [category];
    }

    const [result] = await connection.query(query, params); // Executa a consulta com ou sem parâmetros
    connection.release(); // Libera a conexão de volta ao pool

    // Aplica paginação nos resultados
    paginatedResults(result)(req, res, () => {
      res.json(res.paginatedResults);
    });

  } catch (err) {
    console.error('Erro ao buscar posts:', err);
    res.status(500).json({ message: 'Erro ao buscar posts.' });
  }
});

export default router;
