var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {message:'Una peticion a usuario'});

});

module.exports = router;
