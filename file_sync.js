<<<<<<< HEAD
const fs = require('fs').promises;
const path = require('path');
const {colorsEnabled, logLevel} = require('./config/default');
const logger = require('./utills/logger')("file_sync");
=======
const fs = require("fs").promises;
const path = require("path");
const logger = require("./utills/logger")("file_sync");
>>>>>>> 156e69a06cdd2f753af3c9de10353f0c8642ec9b

const fileSync = {
  start: async (source = "./source", target = "./target") => {
    try {
      const files = await fs.readdir(source, { withFileTypes: true });

      for (const file of files) {
        const sourceFilePath = path.join(source, file.name);
        const targetFilePath = path.join(target, file.name);

<<<<<<< HEAD
				if (file.isDirectory()) {
					await fs.mkdir(targetFilePath, {recursive: true})
					await fileSync.start(sourceFilePath, targetFilePath);
				} else {
					try {
						await fs.access(targetFilePath);
						logger.warn(`File '${file.name}' already exists in target directory.`);
					} catch (error) {
						await fs.copyFile(sourceFilePath, targetFilePath);
						logger.info(`File '${file.name}' synchronized successfully.`);
					}
				}
			}
			logger.info('File sync completed.');
		} catch (err) {
			logger.error('Something went wrong:', err.message);
		}
	}
=======
        if (file.isDirectory()) {
          await fs.mkdir(targetFilePath, { recursive: true });
          await fileSync.start(sourceFilePath, targetFilePath);
        } else {
          try {
            await fs.access(targetFilePath);
            logger.warn(
              `File '${file.name}' already exists in target directory.`
            );
          } catch (error) {
            await fs.copyFile(sourceFilePath, targetFilePath);
            logger.info(`File '${file.name}' synchronized successfully.`);
          }
        }
      }
      logger.info("File sync completed.");
    } catch (err) {
      logger.error("Something went wrong:", err.message);
    }
  },
>>>>>>> 156e69a06cdd2f753af3c9de10353f0c8642ec9b
};

module.exports = fileSync;
