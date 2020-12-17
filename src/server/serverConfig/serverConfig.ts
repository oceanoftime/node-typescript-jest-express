import { IRepository } from '../../db/interface';
import { IServerConfig, RepositoryData } from './interface';

export default class ServerConfig implements IServerConfig {
  db: IRepository<RepositoryData>

  constructor(db: IRepository<RepositoryData>) {
    this.db = db;
  }
}
