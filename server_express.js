const express = require("express");
const morgan = require("morgan");
const { nodeEnv, port } = require("config");
const { route } = require("./routes/route");
const logger = require("./utills/logger")("server Express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

if (nodeEnv) app.use(morgan(nodeEnv));

app.use(bodyParser.json());

app.use("/users", route);

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => logger.info(`The server is running on ${port}`));
