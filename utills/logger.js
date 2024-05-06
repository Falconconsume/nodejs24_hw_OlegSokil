const fs = require('fs');
const colors = require("colors");
const path = require('path')
const {colorsEnabled, logLevel} = require('../config/default.js')

if (colorsEnabled) {
	colors.enable()
}

if (!fs.existsSync('./logs')) {
	fs.mkdirSync('./logs');
}

const infoStream = fs.createWriteStream('./logs/info.log', {flags: 'a'});
const errorStream = fs.createWriteStream('./logs/errors.log', {flags: 'a'});

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
