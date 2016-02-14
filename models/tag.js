var mongoose = require('mongoose');

var tagsSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Tag', tagsSchema);
