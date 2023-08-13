const logger = {
  log: (message) => {
    logWithTime('info', message);
  },
  error: (message) => {
    logWithTime('error', message);
  }
};

const logWithTime = (level, message) => {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
};

module.exports = logger;
