import express, { Request, Response } from "express";
import db from "./config/db";
import cors from 'cors'

const app = express();

const port = 3001;

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send('home')
});

app.post("/api/create", (req: Request, res: Response) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)", [title, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
