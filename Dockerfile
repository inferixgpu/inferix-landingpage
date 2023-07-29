FROM node:18-alpine
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN yarn install
COPY . ./
RUN yarn build

EXPOSE 3016
CMD ["yarn", "preview","--port","3016", "--host"]


