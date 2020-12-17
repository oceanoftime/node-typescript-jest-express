import { Request, Response, NextFunction } from 'express';

export default function getData(req: Request, res: Response, next: NextFunction): void {
  let result;

  try {
    result = req.db.index();
  } catch (e) {
    next(e);
  }
  return res.status(200).json(result).end();
}
