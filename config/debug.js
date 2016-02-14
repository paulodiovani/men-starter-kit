var config = {
  'prodution': {
    'debug': ''
  },

  'development': {
    'debug': 'app:server'
  },

  'test': {
    'debug': ''
  }
};

module.exports = (env) => config[env];
