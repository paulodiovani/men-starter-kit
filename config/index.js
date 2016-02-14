var env = process.env.NODE_ENV || 'development';

module.exports = {
  'database': require('./database')(env),
  'debug'   : require('./debug')(env),
  'logger'  : require('./logger')(env)
};
