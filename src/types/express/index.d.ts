import { RepositoryData } from '../../server/serverConfig/interface';
import { IRepository } from '../../db/interface';

// Extend Express Request to include custom variables
declare global {
  namespace Express {
    export interface Request {
      db: IRepository<RepositoryData>
    }
  }
}
