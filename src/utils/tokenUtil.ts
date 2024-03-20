import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const generateToken = (payload: { email: string; id?: number }) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};