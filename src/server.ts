import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Loads .env file

const JWT_SECRET = process.env.JWT_SECRET as string;

const app = express();
app.use(express.json());
