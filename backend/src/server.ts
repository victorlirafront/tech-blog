import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';
import getProducts from './routes/getProducts';
import createPost from './routes/createPost';

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://blog-backend-tau-three.vercel.app', 
    'https://blog-backend-g9k4y75fk-victorlirafront.vercel.app',
    'https://blog-tau-rosy-55.vercel.app',
    'https://blog-git-main-victorlirafront.vercel.app'
  ], 
  methods: ['GET', 'POST', 'OPTIONS'],
}));
app.use(express.json());

app.use('/api/', emailRoutes);
app.use('/api/', getProducts);
app.use('/api/', createPost);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
