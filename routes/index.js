var express = require('express');
var router = express.Router({caseSensitive: true});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The default (english) router' });
})

router.get('/T', function (req, res) {
  res.send('The default (english) T router')
})

module.exports = router;