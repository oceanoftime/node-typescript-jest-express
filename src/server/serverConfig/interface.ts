import { IRepository } from '../../db/interface';
import Data from '../../model/data';

export type RepositoryData = Data

export interface IServerConfig {
  db: IRepository<RepositoryData>
}
