
// con esto modificamos el elemento que tenga id 'msj'
document.getElementById('msj').innerHTML = "Hola Mundo";

// con esto modifico el <p> que se encuentra en la 4ta posicion ( contando de 0 a 5)
document.getElementsByTagName("p")[4].innerHTML = "modifico el 5to p";

// con esto modifico el style del p que tiene id='id'
document.getElementById('id').style.display = 'none';

console.log('Hola soy un print de consola!')
// en el renglon anterior tener un print de consola que se meusta asi 
// dom.js:11:1

function saludo() {
    alert("Bienvenido");
    }ç
/*esta funcion fue llamada por el evento onload que se sentencia en 
 el hmtl en la linea 9, dentro del tag body*/