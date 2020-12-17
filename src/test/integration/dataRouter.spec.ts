import supertest, { Test } from 'supertest';
import http, { Server as HttpServer } from 'http';

import FakeRepository from '../../db/fakeRepository';
import Server from '../../server/server';
import createConfig from '../../server/serverConfig/configFactory';
import createServer from '../../server/serverFactory';
import seedlings from '../seedlings';
import Data from '../../model/data';

describe('should retrieve empty Data array (integration)', () => {
  let server: Server;
  let connection: HttpServer;
  let request: supertest.SuperTest<Test>;

  beforeAll((done) => {
    const db = new FakeRepository();
    const config = createConfig(db);
    server = createServer(config);

    connection = http.createServer(server.app);
    connection.listen(done);
    request = supertest(connection);
  });

  afterAll((done) => {
    connection.close(done);
  });

  it('returns 200', async () => {
    // Arange
    const url = '/data/get';

    // Act
    const response = await request.get(url);

    // Assert
    expect(response.status).toBe(200);
  });

  it('returns empty array', async () => {
    // Arange
    const url = '/data/get';

    // Act
    const response = await request.get(url);

    // Assert
    expect(response.body).toEqual([]);
  });
});

describe('should retrieve Data items (integration)', () => {
  let server: Server;
  let connection: HttpServer;
  let request: supertest.SuperTest<Test>;

  beforeAll((done) => {
    const db = new FakeRepository();
    db.seed(seedlings);
    const config = createConfig(db);
    server = createServer(config);

    connection = http.createServer(server.app);
    connection.listen(done);
    request = supertest(connection);
  });

  afterAll((done) => {
    connection.close(done);
  });

  it('returns 200', async () => {
    // Arange
    const url = '/data/get';

    // Act
    const response = await request.get(url);

    // Assert
    expect(response.status).toBe(200);
  });

  it('returns seedlings', async () => {
    // Arange
    const url = '/data/get';

    // Act
    const response = await request.get(url);

    // Assert
    expect(response.body).toEqual(seedlings);
  });
});

describe('should create Data items (integration)', () => {
  let server: Server;
  let connection: HttpServer;
  let request: supertest.SuperTest<Test>;

  beforeEach((done) => {
    const db = new FakeRepository();
    const config = createConfig(db);
    server = createServer(config);

    connection = http.createServer(server.app);
    connection.listen(done);
    request = supertest(connection);
  });

  afterEach((done) => {
    connection.close(done);
  });

  it('returns 200', async () => {
    // Arange
    const seedling = seedlings[0];
    const url = '/data/create';

    // Act
    const response = await request.post(url)
      .send(seedling);

    // Assert
    expect(response.status).toBe(200);
  });

  it('items successfully added to db (integration)', async () => {
    // Arange
    const seedling: Data = seedlings[0];
    const url = '/data/create';

    // Act
    await request.post(url).send(seedling);

    // Assert
    expect(server.serverConfig.db.findById(seedling.id)).toEqual(seedling);
  });
});
