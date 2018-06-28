var express = require('express');
var router = express.Router();

/* GET home page. ---> llamado a la homepage */
router.get('/', function(req, res, next) { // router.get("/",(req,res)=>{ xxx });
  res.render('index', { title: 'Libros' }); // aca dice que renderize el .pug
  // y se le dice que variables pasar
});

module.exports = router;
