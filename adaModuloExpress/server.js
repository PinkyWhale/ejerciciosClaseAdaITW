var express = requiere ('express');

var app = express();

app.all('/prueba',function(req,res){
    res.send('/prueba ALL')
})

app.listen(3000);