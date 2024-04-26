# https://playwright.dev/docs/docker
# https://playwright.dev/docs/browsers
# https://github.com/nodejs/docker-node/blob/main/20/bookworm-slim/Dockerfile

FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN apt update && \
  apt install -y socat && \
  yarn install && \
  npx -y playwright install --with-deps chromium

COPY . .

EXPOSE 5000

CMD [ "socat", "tcp-listen:5000,fork", "exec:'./run.sh'" ]
