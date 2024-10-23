import express from 'express';
import cors, { CorsOptions } from 'cors';
import emailRoutes from './routes/emailRoutes';
import getProducts from './routes/getProducts';
import createPost from './routes/createPost';

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
}))

app.use(express.json());

app.use('/api/', emailRoutes);
app.use('/api/', getProducts);
app.use('/api/', createPost);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
