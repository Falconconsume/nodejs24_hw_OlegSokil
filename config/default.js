const config = require("config");
require("dotenv").config();

const colorsEnabled = process.env.COLORS_ENABLED === "1";
const logLevel = process.env.LOG_LEVEL || config.get("LOG_LEVEL");
const port = +process.env.PORT || 3000;

module.exports = {
  colorsEnabled,
  logLevel,
  port,
};
