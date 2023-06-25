import express, { Request, Response } from "express";
import db from "./config/db";
import cors from "cors";
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/get", (req: Request, res: Response) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.post("/api/create", (req: Request, res: Response) => {
  const author = req.body.author;
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const category = req.body.category;
  const meta_tag_title = req.body.meta_tag_title;
  const meta_tag_description = req.body.meta_tag_description;
  const post_image = req.body.post_image;

  db.query(
    "INSERT INTO posts (title, content, author, date, category, meta_tag_title, meta_tag_description, post_image) VALUES (?,?,?,?,?,?,?,?)",
    [title, content, author, date, category, meta_tag_title, meta_tag_description, post_image],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`);
});
