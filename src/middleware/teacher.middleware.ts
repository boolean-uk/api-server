import { Response, NextFunction } from 'express';
import { Context } from './context';

const teachers = [
    'vherus',
    'auenc',
    'luca-terrazzan',
    'julesnuggy'
]

export const Teacher = (
    req: Context,
    res: Response,
    next: NextFunction,
  ) => {
    const username = req.context?.username;

    if (!username || !teachers.find(name => name === username.toLowerCase())) {
      return res.status(401).json({
        error: 'Unauthorized'
      });
    }

    next();
  };