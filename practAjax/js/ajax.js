$('#boton').on('Click', function(){
	//$(document).ready(function(e)){
	$ajax({
		method:"GET";
		url: "https://jsonplaceholder.typicode.com/comments"
	})

	.done(function(response)){
		console.log(response);  // para ver que viene
	// aca va el codigo para mostrar los resultados.

	for (i=0; i<response.lenght; i++){

		let generador= `<p> El nombre es: ${response[i].name}</p> 
						<p>El mail es: ${response[i].email}</p>`;
						$('.envio').append(generador)

	}

}
})
