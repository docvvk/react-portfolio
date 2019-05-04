FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm build

FROM mhart/alpine-node
RUN npm i serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]