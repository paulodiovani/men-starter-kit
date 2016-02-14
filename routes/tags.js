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

/* GET tag. */
router.get('/:id', function(req, res, next) {
  Tag.findOne({_id: req.params.id})
    .then(function(tag) {
      if (!tag) { return next(); }

      res.render('tags/show', {
        title: 'Tag ' + tag.name,
        tag: tag
      });
    })
    .catch(next);
});

module.exports = router;
