FROM node:22-alpine3.19
LABEL maintainer "Oliver Boucher <oliver.b25.f@gmail.com>"

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3300
CMD [ "npm", "run", "dev" ]