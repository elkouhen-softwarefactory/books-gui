FROM node:8.14.0-jessie-slim as node

MAINTAINER mehdi.elkouhen@softeam.fr

WORKDIR /apps/books

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY public/ public/ 

COPY src/ src/

RUN npm run-script build

FROM nginx:1.15.7

COPY --from=node /apps/books/build/* /usr/share/nginx/html/

RUN mkdir /usr/share/nginx/html/static

RUN mv /usr/share/nginx/html/js /usr/share/nginx/html/static/

RUN mv /usr/share/nginx/html/css /usr/share/nginx/html/static/

EXPOSE 80