FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM node:18-alpine AS deploy-node

WORKDIR /app
COPY --from=build /app/build .
COPY --from=build /app/package.json .
COPY --from=build /app/.svelte-kit .

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "index.js"]



