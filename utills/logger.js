<<<<<<< HEAD
const fs = require('fs');
const colors = require("colors");
const path = require('path')
const {colorsEnabled, logLevel} = require('../config/default.js')
=======
const fs = require("fs");
const colors = require("colors");
const path = require("path");
const { colorsEnabled, logLevel } = require("../config/default.js");
>>>>>>> 156e69a06cdd2f753af3c9de10353f0c8642ec9b

if (colorsEnabled) {
  colors.enable();
}

<<<<<<< HEAD
if (!fs.existsSync('./logs')) {
	fs.mkdirSync('./logs');
}

const infoStream = fs.createWriteStream('./logs/info.log', {flags: 'a'});
const errorStream = fs.createWriteStream('./logs/errors.log', {flags: 'a'});
=======
if (!fs.existsSync("./logs")) {
  fs.mkdirSync("./logs");
}

const pathInfo = path.join(__dirname, "info.log");
const pathError = path.join(__dirname, "errors.log");

const infoStream = fs.createWriteStream(pathInfo, { flags: "a" });
const errorStream = fs.createWriteStream(pathError, { flags: "a" });
>>>>>>> 156e69a06cdd2f753af3c9de10353f0c8642ec9b

const applyColor = (moduleName, message, colorFunc) => {
  if (colorsEnabled) {
    return `${colorFunc(moduleName)}: ${message}`;
  } else {
    return `${moduleName}: ${message}`;
  }
};

function logger(moduleName) {
  return {
    info: (msg) => {
      const logMessage = applyColor(moduleName, msg, colors.green);
      if (logLevel === "info") {
        console.log(logMessage);
      }
      infoStream.write(`${new Date().toISOString()} - ${logMessage}\n`);
    },
    warn: (msg) => {
      const logMessage = applyColor(moduleName, msg, colors.yellow);
      if (logLevel === "info" || logLevel === "warn") {
        console.warn(logMessage);
      }
      errorStream.write(`${new Date().toISOString()} - ${logMessage}\n`);
    },
    error: (msg) => {
      const logMessage = applyColor(moduleName, msg, colors.red);
      console.error(logMessage);
      errorStream.write(`${new Date().toISOString()} - ${logMessage}\n`);
    },
  };
}

<<<<<<< HEAD
function getLogger(moduleName) {
	return {
		info: (msg) => {
			const logMessage = applyColor(moduleName, msg, colors.green);
			if (logLevel === 'info') {
				console.log(logMessage);
			}
			infoStream.write(`${(new Date).toISOString()} - ${logMessage}\n`);
		},
		warn: (msg) => {
			const logMessage = applyColor(moduleName, msg, colors.yellow);
			if (logLevel === 'info' || logLevel === 'warn') {
				console.warn(logMessage);
			}
			errorStream.write(`${(new Date).toISOString()} - ${logMessage}\n`);
		},
		error: (msg) => {
			const logMessage = applyColor(moduleName, msg, colors.red);
			console.error(logMessage);
			errorStream.write(`${(new Date).toISOString()} - ${logMessage}\n`);
		}
	};
}

process.on('beforeExit', () => {
	infoStream.end();
	errorStream.end();
})

module.exports = getLogger;
=======
process.on("beforeExit", () => {
  infoStream.end();
  errorStream.end();
});

module.exports = logger;
>>>>>>> 156e69a06cdd2f753af3c9de10353f0c8642ec9b
