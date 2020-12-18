This project is a boilerplate implementation of a microservice using Node, Typescript, Jest and Express. Dependency injection is used to provide the express routes with a database and supertest is used to test the express client.

## Install
- `npm install`
- create `.dev.env`, `.prod.env` and `.test.env` in the root folder
- Define following keys in all config files* \
`NODE_ENV` \
`PORT`

_* NODE_ENV does not need to be set in `.test.env`_

## Testing suite
- `npm test`

## Run service in test driven development mode
- `npm run dev:jest`

## Run service locally in development mode
- `npm run dev:service`

## How to debug with Visual Studio Code
- Create the following configuration in `.vscode/launch.json`
```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "attach to service",
      "port": 9001,
      "restart": true,
      "protocol": "inspector"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "attach to jest",
      "port": 9002,
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```
- Execute `npm run dev:service` and run the `Attach to service` task
- Execute `npm run dev:jest` and run the `Attach to jest` task

## Run service locally in production mode
- `npm start`

## Run service in container in production mode
- Create docker image called `service`
- `docker build --tag service .`
- Create and run container called `service_container` using `service` image
- `docker run --rm --env-file .prod.env --publish 3000:3000 --name service_container service`
- This container will remove itself after it is stopped using the `--rm` option
- Access the container using `docker exec -it service_container bash` and run `pm2 monit` to access the process manager's dashboard

## Ref
Thanks to the following contributors for leading the way \
https://github.com/jizusun/express-typescript-jest-sample \
https://github.com/crsandeep/simple-react-full-stack

## Notes
- `res.connection.destroy();` for testing dropped connections