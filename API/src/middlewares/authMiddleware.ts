import { Request, Response, NextFunction } from 'express';
import { isValidToken } from '../utils/tokenManager';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  if (!token || !isValidToken(token)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
};
