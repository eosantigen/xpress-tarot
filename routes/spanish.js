var express = require('express');
var router = express.Router({caseSensitive: true});

/* GET Spanish listing. */
router.get('/', function(req, res, next) {
  res.send('the Spanish router');
});

router.get('/T', function(req, res, next) {
  res.send('the Spanish T router');
});

module.exports = router;