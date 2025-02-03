FROM node:18.18-alpine

WORKDIR /app-backend

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]
CMD [ "dev" ] 