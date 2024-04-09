FROM node:20.12.0

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD [ "npm", "start" ]

EXPOSE 3003