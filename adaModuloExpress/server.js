var express = requiere ('express');
var app = express();

app.all('/prueba',function(req,res){
    res.send('HEllo world');
})

app.use('/customer', require)

app.listen(3000);