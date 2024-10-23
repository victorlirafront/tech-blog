import express from 'express';
import emailRoutes from './routes/emailRoutes';
import getProducts from './routes/getProducts';
import createPost from './routes/createPost';

import cors, { CorsOptions } from 'cors';

const allowedOrigins: string[] = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://blog-backend-tau-three.vercel.app',
  'https://blog-backend-g9k4y75fk-victorlirafront.vercel.app',
  'https://blog-tau-rosy-55.vercel.app',
  'https://blog-git-main-victorlirafront.vercel.app',
  'https://www.victorlirablog.com',
  'https://tech-blog-production-cd77.up.railway.app',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// Suas rotas
app.use('/api/', emailRoutes);
app.use('/api/', getProducts);
app.use('/api/', createPost);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
