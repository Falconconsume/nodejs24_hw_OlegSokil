const config = require("config");
require("dotenv").config();

const colorsEnabled = process.env.COLORS_ENABLED === "1";
const logLevel = process.env.LOG_LEVEL || config.get("LOG_LEVEL");
const port = Number(process.env.PORT) || 3000;
const morganLogFormat = process.env.NODE_ENV || "dev";

module.exports = {
  colorsEnabled,
  logLevel,
  port,
  morganLogFormat,
};
