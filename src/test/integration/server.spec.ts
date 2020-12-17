import got from 'got';

import Server from '../../server/server';
import createServer from '../../server/serverFactory';

const { PORT } = process.env;

let server: Server;

describe('server should start successfully and respond (integration)', () => {
  beforeAll(() => {
    server = createServer();
    server.start();
  });

  afterAll(() => {
    server.stop();
  });

  it('will return a 200 on test route', async () => {
    const res = await got(`http://localhost:${PORT}/test`);
    expect(res.statusCode).toBe(200);
  });
});
