import express from 'express';

import getData from '../routeHandlers/getData';
import createData from '../routeHandlers/createData';

const dataRouter = express.Router();

dataRouter.use(express.json());
dataRouter.get('/get', getData);
dataRouter.post('/create', createData);

export default dataRouter;
