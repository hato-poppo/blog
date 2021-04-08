FROM node:14.16.0-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update
RUN apt install git
RUN npm install
ENV PATH $PATH:./node_modules/.bin

# alpineとslimについて
# https://www.creationline.com/lab/29422
# この記事を信じてslimを使おう