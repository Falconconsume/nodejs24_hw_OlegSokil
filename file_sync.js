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
					try {
						await fs.access(targetFilePath);
						logger.warn(`File '${file.name}' already exists in target directory.`);
						await fs.copyFile(sourceFilePath, targetFilePath, {encoding: 'utf-8', flag: 'a'})
					} catch (error) {
						logger.error(`File '${file.name}' something went wrong in this file!`);
					}
				}
			}
			logger.info('File sync completed.');
		} catch (err) {
			logger.error('Something went wrong:', err.message);
		}
	}
};

module.exports = fileSync;
