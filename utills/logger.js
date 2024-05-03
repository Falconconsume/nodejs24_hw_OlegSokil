const colors = require("colors");
const colorsEnabled = require('../config/default')
const logLevel = require('../config/default')

if (colorsEnabled) {
	colors.enable()
}

const applyColor = (moduleName, message, colorFunc) => {
	if (colorsEnabled) {
		return `${colorFunc(moduleName)}: ${message}`;
	} else {
		return `${moduleName}: ${message}`;
	}
}

function getLogger(moduleName) {
	return {
		info: (msg) => {
			if (logLevel === 'info') {
				console.log(applyColor(moduleName, msg, colors.green));
			}
		},
		warn: (msg) => {
			if (logLevel === 'info' || logLevel === 'warn') {
				console.warn(applyColor(moduleName, msg, colors.yellow));
			}
		},
		error: (msg) => {
			console.error(applyColor(moduleName, msg, colors.red));
		}
	};
}

module.exports = getLogger;
