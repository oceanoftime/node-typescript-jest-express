/*
 * Project Name: service
 * File Name: createData.ts
 * Programmer: Philip Arff
 * Date: Wed, Dec 16, 2020
 * Description: The express function to create a Data element
*/

import { Request, Response, NextFunction } from 'express';
import Data from '../model/data';

/*
 * Function Name: getData
 * Description: Handle the request to create new Data
 * Parameters: req: Request, res: Response
 * Returns: 200
*/
export default function getData(req: Request, res: Response, next: NextFunction): void {
  try {
    req.db.create(new Data(req.body.id, req.body.value));
  } catch (e) {
    next(e);
  }
  return res.sendStatus(200).end();
}
