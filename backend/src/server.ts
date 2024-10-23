import express from 'express';
import cors, { CorsOptions } from 'cors';
import emailRoutes from './routes/emailRoutes';
import getProducts from './routes/getProducts';
import createPost from './routes/createPost';

const allowedOrigins: string[] = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://www.victorlirablog.com',
  'https://www.victorlirablog.com' ,
  'https://blog-backend-tau-three.vercel.app',
  'https://blog-backend-g9k4y75fk-victorlirafront.vercel.app',
  'https://blog-tau-rosy-55.vercel.app',
  'https://blog-git-main-victorlirafront.vercel.app',
];

const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Permitir a requisição
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Certifique-se de permitir os métodos necessários
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos que serão permitidos
  credentials: true, // Caso esteja lidando com cookies/sessões
  optionsSuccessStatus: 204 // Para lidar com requisições preflight que possam retornar 200
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/', emailRoutes);
app.use('/api/', getProducts);
app.use('/api/', createPost);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
