import express, { Request, Response } from "express";
import db from "./config/db";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {});

app.post("/api/create", (req: Request, res: Response) => {
  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES ()",
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
