import express, { Request, Response } from "express";
import { connection } from "./config/db";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const paginatedResults = function (model: any) {
    return (req: any, res: any, next: any) => {
        const page: number = Number(req.query.page) || 1; // Página padrão é 1 se não for fornecida.
        const limit: number = Number(req.query.limit) || 10; // Limite padrão é 10 se não for fornecido.

        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;
        const results: any = {};

        if (endIndex < model.length) {
            results.next = { page: page + 1, limit: limit };
        }

        if (startIndex > 0) {
            results.previous = { page: page - 1, limit: limit }
        }

        results.totalPages = model.length / limit;
        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    }
}

// Rota para buscar posts paginados
app.get('/api/get', (req: Request, res: any) => {
    // Executa a consulta SQL
    connection.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Erro ao buscar posts.' });
            return;
        }

        // Chama a função de paginar os resultados
        paginatedResults(result)(req, res, () => {
            // Retorna os resultados paginados
            res.json(res.paginatedResults);
        });
    });
});

app.post("/api/create", (req: any, res: any) => {
    const author = req.body.author;
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const category = req.body.category;
    const meta_tag_title = req.body.meta_tag_title;
    const meta_tag_description = req.body.meta_tag_description;
    const post_image = req.body.post_image;
    const post_background = req.body.post_background;

    connection.query(
        "INSERT INTO posts (title, content, author, date, category, meta_tag_title, meta_tag_description, post_image, post_background) VALUES (?,?,?,?,?,?,?,?,?)",
        [title, content, author, date, category, meta_tag_title, meta_tag_description, post_image, post_background],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        }
    );
});

app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});
