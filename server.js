const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv");
const logger = require("./utills/logger")("server");
dotenv.config();

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/healthcheck" && method === "GET") {
    res.status = 200;
    res.end("healthcheck passed");
    logger.info(`${method} ${url} ${res.statusCode}`);
  } else if (url !== "/healthcheck" || method !== "GET") {
    res.statusCode = 404;
    res.end();
    logger.warn(`${method} ${url} ${res.statusCode}`);
  }
});

server.listen(process.env.PORT, () =>
  console.log(`The server is running on ${process.env.PORT}`)
);
