FROM node:12
WORKDIR /usr/src/service

# copy source code to service/src/ folder
COPY /src ./src
COPY package.json ./
# TODO Should be production config
COPY tsconfig.json ./

RUN npm install pm2 -g

RUN npm install
RUN npm run build

CMD ["pm2-runtime","dist/index.js","--wait-ready"]