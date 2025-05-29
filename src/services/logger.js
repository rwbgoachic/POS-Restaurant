const { logRequest } = require('../shared/utils');

function logMiddleware(req, res, next) {
  logRequest(req.method, req.url);
  next();
}

module.exports = logMiddleware;