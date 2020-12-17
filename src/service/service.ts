import FakeRepository from '../db/fakeRepository';
import Server from '../server/server';
import createConfig from '../server/serverConfig/configFactory';
import createServer from '../server/serverFactory';

export default class Service {
  server: Server;

  constructor() {
    const config = createConfig(new FakeRepository());
    this.server = createServer(config);

    this.server.start(() => {
      if (process.send) {
        process.send('ready');
      }
    });

    process.on('SIGINT', () => {
      this.server.stop();
    });
  }
}
