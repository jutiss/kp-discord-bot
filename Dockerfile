FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build
RUN npm run deploy

CMD [ "npm", "run", "start" ]
