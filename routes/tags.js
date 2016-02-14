var express = require('express');
var router  = express.Router();
var Tag     = require('../models/tag');

/* GET tags listing. */
router.get('/', function(req, res) {
  Tag.find({})
    .then(function(tags) {
      res.render('tags/index', {
        title: 'Tags',
        tags: tags
      });
    });
});

module.exports = router;
