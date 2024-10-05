import express, { Request } from 'express';
import { connection } from './config/db';
import cors from 'cors';
import nodemailer from 'nodemailer';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async function(transporter: any, data: any){
  const { name, email, phone, subject, message} = data

  const mailOptions = {
    from: {
      name: name,
      address: process.env.USER_EMAIL
    },
    to: ["victorliracorporativo@gmail.com"],
    subject: `${subject} ✔`,
    text: 'Hello world?',
    html: `
      <p> celular: ${phone} </p>
      <p> email: ${email} </p>
      <p> email: ${message} </p>
    `,
  };

  try{
    await transporter.sendMail(mailOptions)
    console.log("Email has been sent")
  }catch(error){
    console.error(error)
  }
}

app.post("/api/sendEmail", (req: Request, res: any) => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const subject = req.body.subject
  const message = req.body.message

  const data = {
    name,
    email,
    phone,
    subject,
    message
  }
  sendMail(transporter, data)
})

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

app.get('/api/get', (req: Request, res: any) => {
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

app.post('/api/create', (req: any, res: any) => {
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

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
