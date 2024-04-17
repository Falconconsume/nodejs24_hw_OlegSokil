function info(msg) {
  console.log(msg);
}

function warn(warnMsg) {
  console.error(warnMsg);
}

function error(errorMsg) {
  console.error(errorMsg);
  return {
    warn,
    info,
  };
}

module.exports = error;
