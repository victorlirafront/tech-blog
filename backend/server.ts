import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Helladfasdfasdfoasdf, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});