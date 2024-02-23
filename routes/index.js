var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contact Database App', contactInfo: 'Mitansh Chaudhari, Email: mchaudhari1@hawk.iit.edu' });
});

module.exports = router;
