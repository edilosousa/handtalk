import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './middlewares/authMiddleware';
import { rateLimiter } from './middlewares/rateLimiter';
import { collectData } from './controllers/collectController';
import { listData } from './controllers/listController';

const app = express();

const secretKey = '123456';

app.use(cors());

app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.post('/login', (req, res) => {
    const token = jwt.sign({ 'admin':'admin' }, secretKey, { expiresIn: '1h' }); // Define um tempo de expiração de 1 hora
    res.json({ token });
});

// app.post('/collect', authMiddleware, rateLimiter, collectData);
app.post('/collect',  authMiddleware, rateLimiter,collectData);
app.get('/list', listData);

export default app;
