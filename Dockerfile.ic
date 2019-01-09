FROM node:8.14.0-jessie-slim as node

ARG SONAR_TOKEN

MAINTAINER mehdi.elkouhen@softeam.fr

WORKDIR /apps/books

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install -g sonarqube-scanner

COPY public/ public/

COPY src/ src/

RUN npm run-script build

RUN sonar-scanner -Dsonar.host.url=https://sonarqube.k8.wildwidewest.xyz -Dsonar.login=$SONAR_TOKEN

FROM nginx:1.15.7

COPY --from=node /apps/books/build/* /usr/share/nginx/html/

COPY config/default.conf /tmp/default.template

COPY config/nginx-run.sh nginx-run.sh

RUN mkdir /usr/share/nginx/html/static

RUN mv /usr/share/nginx/html/js /usr/share/nginx/html/static/

RUN mv /usr/share/nginx/html/css /usr/share/nginx/html/static/

EXPOSE 80

CMD ["sh", "nginx-run.sh"]