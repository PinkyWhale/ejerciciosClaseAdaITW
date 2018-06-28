const axios = require('axios')

var superObjeto = {}

axios
    .get('http://localhost:3000/users/listjson')
    .then(function(res){
        console.log('respuesta de listjson')
        superObjeto.respuesta1 = res.data;
        returnaxios.get('http://localhost:3000/users/listjson2')
    })

    .then(function(res){
        console.log('respuesta de listjson2')
        superObjeto.respuesta2 = res.data;
    })
    .then(function(){
        console.log('un then posterior posterior')
        console.log(superObjeto)
    })
    .catch(function(err){
        console.log('catch')
    })