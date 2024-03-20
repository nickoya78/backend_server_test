import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

// Define a UserPayload interface
interface UserPayload {
  id: string;
  email: string;
}

// Extend the Request interface
declare global {
  namespace Express {
    interface Request {
      user?: any // Update the type of the user property
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded ; // Now you don't need to use 'as any'
    next();
  });
};