import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middlewares/authMiddleware';
import { rateLimiter } from './middlewares/rateLimiter';
import { collectData } from './controllers/collectController';
import { listData } from './controllers/listController';

const app = express();

app.use(cors());

app.use(express.json());

// app.post('/collect', authMiddleware, rateLimiter, collectData);
app.post('/collect', collectData);
app.get('/list', listData);

export default app;
