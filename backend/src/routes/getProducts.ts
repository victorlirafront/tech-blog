import { connection } from '../config/db';
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

router.get('/get', (req: any, res: any) => {
  const category: string = String(req.query.category) || 'all';

  if (category === 'all' || !category) {
    connection.query('SELECT * FROM posts', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Erro ao buscar posts.' });
        return;
      }

      paginatedResults(result)(req, res, () => {
        res.json(res.paginatedResults);
      });
    });
  } else {
    connection.query(
      'SELECT * FROM posts WHERE category = ?',
      [category],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Erro ao buscar posts.' });
          return;
        }

        paginatedResults(result)(req, res, () => {
          res.json(res.paginatedResults);
        });
      }
    );
  }
});

export default router;
