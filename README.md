This project is a boilerplate implementation of a microservice using Node, Typescript, Jest and Express. Dependency injection is used to provide the express routes with a database and supertest is used to test the express client.

## Notes
- `res.connection.destroy();` for testing dropped connections

## Install
- `npm install`
- Define following keys in all config files\
`NODE_ENV`
`PORT`

## Testing
- Define `.test.env` config file in root.
- `NODE_ENV` does not need to be set as Jest will set it to `test`
- `npm test`

## Run service locally in development mode
- Define `.dev.env` config file in root.
- Set `NODE_ENV` to `development`
- `npm run dev`

## How to debug with Visual Studio Code
Creating the following `.vscode/launch.json` file enables debugging support
```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug",
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

## Run service locally in production mode
- Define `.prod.env` config file in root.
- Set `NODE_ENV` to `production`
- `npm start`

## Run service in container in production mode
- Define `.prod.env` config file in root.
- Set `NODE_ENV` to `production`
- Create docker image called `service`.
- `docker build --tag service .`
- Create and run container called `service_container` using `service` image.
- `docker run --rm --env-file .prod.env --publish 3000:3000 --name service_container service`
- This container will remove itself after it is stopped using the `--rm` option.
- Access the container using `docker exec -it service_container bash` and run `pm2 monit` to access the process manager's dashboard.