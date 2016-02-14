var config = {
  'prodution': {
    'logger': 'dev'
  },

  'development': {
    'logger': 'dev'
  },

  'test': {
    'logger': false
  }
};

module.exports = (env) => config[env];
