FROM node:16.17.1

WORKDIR /express-project

COPY package.json .
COPY package-lock.json .
RUN npm ci
# для сохранения зависимостей

COPY server/server.js .
COPY server/database/databasepg.js .
COPY server/migrations .

COPY . .
