const { logRequest, logError } = require('./src/shared/utils');

try {
  logRequest('INFO', `Starting Node.js v${process.versions.node}`);
  console.log(`Hello Node.js v${process.versions.node}!`);
} catch (error) {
  logError(error);
}