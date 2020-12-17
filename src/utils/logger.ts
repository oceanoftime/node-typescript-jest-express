import winston, { Logform } from 'winston';

const { NODE_ENV } = process.env;

const debugSillyInfoFilter = winston.format(
  (info: Logform.TransformableInfo) => ((info.level === 'debug' || info.level === 'silly' || info.level === 'info') ? info : false)
);

const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(
      (info: Logform.TransformableInfo) => `${info.timestamp} ${info.level.toUpperCase()} ${info.message} ${info.meta ? JSON.stringify(info.meta) : ''}`
    )
  ),
  transports: [
    new winston.transports.File({ level: 'error', filename: 'error.log' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      level: NODE_ENV !== 'production' ? 'silly' : 'info',
      format: winston.format.combine(
        winston.format.printf((info: Logform.TransformableInfo) => `${info.timestamp} ${info.level.toUpperCase()} ${info.message}`)
      ),
    })
  ],
});

export default logger;
