var express = require('express');
var router = express.Router();

/* My First Server Page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aravind kumar koyyala' });
});

module.exports = router;
