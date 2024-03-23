FROM node:18.14.2-alpine3.17

WORKDIR /todo/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]