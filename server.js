const http = require("http");
const dotenv = require("dotenv");
const logger = require("./utills/logger")("Server");
const { port } = require("config");
dotenv.config();

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/healthcheck" && method === "GET") {
    res.status = 200;
    res.end("healthcheck passed");
    logger.info(`${method} ${url} ${res.statusCode}`);
  } else {
    res.statusCode = 404;
    res.end();
    logger.warn(`${method} ${url} ${res.statusCode}`);
  }
});

server.listen(process.env.PORT, () =>
  logger.info(`The server is running on ${port}`)
);
