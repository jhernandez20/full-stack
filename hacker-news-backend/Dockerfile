
FROM node:latest as node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

ENV db_host mongo

# Expose port
EXPOSE 3789

CMD ["npm", "start"]


