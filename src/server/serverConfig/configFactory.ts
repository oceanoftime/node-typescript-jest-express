import { IRepository } from '../../db/interface';
import { RepositoryData } from './interface';
import ServerConfig from './serverConfig';

export default function createConfig(db: IRepository<RepositoryData>): ServerConfig {
  return new ServerConfig(db);
}
