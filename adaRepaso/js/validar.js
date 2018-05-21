// Todos los imputs son obligatorios

function validar (){
	e.preventDefault(); /*con esto evitamos el refresh de la pagina*/

	var nombre = $('#nombre').val();
	var apel = $('#apel').val();
	var mailj = $('#mail').val();
	
	console.log(nombre);

// Version1
	var pelis = Array.from($('classGenero'));

	pelis.forEach(function(elemento,indice){
		if (elemento.checked){
			console.log("Elegiste esta opcion");
		}
	});
}

// Version 3 con JQuery

var pelis = $ ('classGenero');

let errores = $ ('.errores')
/*

version2
$.each(pelis, function(indice,elemento){

	elemento.textContent = "campo obligatorio" //COn esto escribimos contenido	
	console.log(elemento);

});*/


// V1
$('#alquilar').on('click', function(e){
	if (validar){
		$('#alquiler').submit();
		alert("El fomulario se ha enviado. Gracias!")
	}
});
// Borro el formulario y los mensajes
$('#limpiar').on('click',function(e){
	console.log("borré el formulario")
	$('#errores').hmtl("")
});

// V2

$('#formulario').on('submit',function(e){
	validar(e);
});

// buscar la funcion toggle de Jquery3