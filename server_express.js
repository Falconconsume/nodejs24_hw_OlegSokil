const express = require("express");
const morgan = require("morgan");
const path = require('path')
const { morganLogFormat, port } = require("config");
const { route } = require("./routes/route");
const { pageRouter } = require("./routes/pages");
const logger = require("./utills/logger")("server Express");
require("dotenv").config();

const app = express();

app.use(morgan(morganLogFormat));

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'static')))

app.use(express.json());

app.use('/', pageRouter)

// API
app.use("/users", route);

app.listen(port, () => logger.info(`The server is running on ${port}`));
