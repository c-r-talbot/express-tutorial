var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this website', name: "Me-me"});
});

router.get('/next', function(req, res, next) {
  res.render('next', { title: 'this website', name: "Me-me"});
});

module.exports = router;
