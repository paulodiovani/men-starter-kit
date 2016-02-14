var config = {
  'development': {
    'url': '127.0.0.1:27017/men'
  },

  'test': {
    'url': '127.0.0.1:27017/men-test'
  }
};

module.exports = (env) => config[env];
