import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign({
    test: 'Antony',
  }, 'secret', {
    expiresIn: 60 * 60 * 24
  });

  return res.json({ token: token });
}

export const profileHandler = (req: Request, res: Response) => {
  return res.json({ profile: req.user, message: 'profile data' });
}