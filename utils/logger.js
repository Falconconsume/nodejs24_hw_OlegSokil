function getLogger(moduleName) {
  return {
    info: (msg) => {
      console.log(`${moduleName}: ${msg}`);
    },
    warn: (msg) => {
      console.error(`${moduleName}: ${msg}`);
    },
    error: (msg) => {
      console.log(`${moduleName}: ${msg}`);
    },
  };
}

module.exports = getLogger;
