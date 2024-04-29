const colors = require("colors");
const config = require('config');
require('dotenv').config();

const colorsEnabled = process.env.COLORS_ENABLED ? process.env.COLORS_ENABLED === '1' : config.get('COLORS_ENABLED') === '1';
const logLevel = process.env.LOG_LEVEL || config.get('LOG_LEVEL');

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
