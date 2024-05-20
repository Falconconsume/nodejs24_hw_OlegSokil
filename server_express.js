const express = require("express");
const morgan = require("morgan");
const { morganLogFormat, port } = require("config");
const { route } = require("./routes/route");
const logger = require("./utills/logger")("server Express");
require("dotenv").config();

const app = express();

app.use(morgan(morganLogFormat));

app.use(express.json());

app.use("/users", route);

app.listen(port, () => logger.info(`The server is running on ${port}`));
