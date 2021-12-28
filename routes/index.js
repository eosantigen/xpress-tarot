var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tarot', function (req, res) {
  res.send('Must select a Tarot object...')
})

module.exports = router;
