const fs = require('fs').promises;
const path = require('path');
const logger = require('./utills/logger')("file_sync");

const fileSync = {
	start: async (source = './source', target = './target') => {
		try {
			const files = await fs.readdir(source, {withFileTypes: true});

			for (const file of files) {
				const sourceFilePath = path.join(source, file.name);
				const targetFilePath = path.join(target, file.name);

				if (file.isDirectory()) {
					await fs.mkdir(targetFilePath, {recursive: true});
					await fileSync.start(sourceFilePath, targetFilePath);
				} else {
					await fs.copyFile(sourceFilePath, targetFilePath);
					logger.info(`File '${file.name}' synchronized successfully.`);
				}
			}
			logger.info('File sync completed.');
		} catch (err) {
			logger.warn('Something went wrong:', err);
		}
	}
};

module.exports = fileSync;
