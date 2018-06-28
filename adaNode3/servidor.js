var http = require('http');

var fs = require('fs');

var mime_types = {
   'js' : 'text/javascript',
   'html' : 'text/html',
   'css' : 'text/css',
   'jpg' : 'image/jpg',
   'gif' : 'image/gif',
   'png' : 'image/png'
};

http.createServer(function(req, res){
    
    

    fs.readFile('html/perfil.html', function(err, data){
        //Escribo el contenido del archivo en la respuesta
		var mime_type = mime_types[extension];
        res.writeHead(200, {'Content-type' : mime_type});
        res.write(data);
        res.end();
    });

}).listen('8080', function(){console.log("Escuchando en el puerto 8080")});
