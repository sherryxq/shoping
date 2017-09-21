var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/bestfruit', function(req, res, next) {
  res.sendFile('static/bestfruit01.html');
});

module.exports = router;
