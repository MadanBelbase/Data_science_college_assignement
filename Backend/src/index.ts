import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRouter from './Routes/UserAuth'
import connectDB from './utils/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());


app.use('/api/auth', AuthRouter);

connectDB(); // Wait for DB connection


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL}`);
});