FROM alpine

RUN apk add --update nodejs npm

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000