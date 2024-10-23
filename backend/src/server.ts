import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';
import getProducts from './routes/getProducts';
import createPost from './routes/createPost';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/', emailRoutes);
app.use('/api/', getProducts);
app.use('/api/', createPost);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
