import express from 'express';
import { Server as HttpServer } from 'http';

import logger from '../utils/logger';
import dataRouter from '../router/dataRouter';
import { ICallback } from './interface';
import { IServerConfig } from './serverConfig/interface';

const { NODE_ENV, PORT } = process.env;

class Server {
  app: express.Application;
  connection: HttpServer | null;
  serverConfig: IServerConfig;

  constructor(serverConfig: IServerConfig) {
    this.connection = null;
    this.serverConfig = serverConfig;
    this.app = express();
    this.configure(serverConfig);
    this.setupRoutes();
  }

  configure(serverConfig: IServerConfig): void {
    if (serverConfig.db) {
      this.app.use(((req, res, next) => {
        req.db = serverConfig.db;
        next();
      }));
    }
  }

  setupRoutes(): void {
    this.app.use('/data', dataRouter);

    if (NODE_ENV === 'test') {
      this.app.use('/test', (req, res) => res.sendStatus(200).end);
    }
  }

  start(callback?: ICallback): void {
    this.connection = this.app.listen(PORT, () => {
      logger.info(`Service (pid ${process.pid}) is listening on port ${PORT} in ${NODE_ENV} mode`);

      if (callback) {
        callback();
      }
    });
  }

  stop(): void {
    logger.info('Shutting down');
    if (this.connection) this.connection.close();
  }
}

export default Server;
