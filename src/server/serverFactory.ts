import FakeRepository from '../db/fakeRepository';
import Server from './server';
import createConfig from './serverConfig/configFactory';
import { IServerConfig } from './serverConfig/interface';

export default function createServer(
  serverConfig: IServerConfig = createConfig(new FakeRepository())
): Server {
  return new Server(serverConfig);
}
