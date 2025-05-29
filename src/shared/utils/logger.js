import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  ]
});

/**
 * Log an info message
 * @param {string} message - Message to log
 * @param {Object} meta - Additional metadata
 */
export const logInfo = (message, meta = {}) => {
  logger.info(message, meta);
};

/**
 * Log an error message
 * @param {Error|string} error - Error to log
 * @param {Object} meta - Additional metadata
 */
export const logError = (error, meta = {}) => {
  logger.error(error instanceof Error ? error.message : error, {
    ...meta,
    stack: error instanceof Error ? error.stack : undefined
  });
};

/**
 * Log a warning message
 * @param {string} message - Message to log
 * @param {Object} meta - Additional metadata
 */
export const logWarning = (message, meta = {}) => {
  logger.warn(message, meta);
};