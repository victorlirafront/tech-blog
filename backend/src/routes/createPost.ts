import express from 'express';
import { connection } from '../config/db';

const router = express.Router();

router.post('/create', (req: any, res: any) => {
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
    'INSERT INTO posts (title, content, author, date, category, meta_tag_title, meta_tag_description, post_image, post_background) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      title,
      content,
      author,
      date,
      category,
      meta_tag_title,
      meta_tag_description,
      post_image,
      post_background,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

export default router;
