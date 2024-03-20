// import { Request, Response, NextFunction } from 'express';
declare namespace Express {
  export interface Request {
    user?: any; // Use a more specific type according to your application's needs
  }
}


