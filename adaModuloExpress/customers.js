var express = requiere ('express');

var app = express();
var router = express.Router();

router.get('/', function(req, res){
    res.send('listado de clientes');
});

router.post('/', function(req, res){
    res.send('crear nuevo cliente');
});

module.exports = router;

app.all('/prueba',function(req,res){
    res.send('/prueba ALL')
})

app.listen(3000);