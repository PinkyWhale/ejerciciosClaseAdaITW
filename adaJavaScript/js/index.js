//  Tomar dos variables si ambas son mayores de 10, entonces los sumo, sino los multiplico

x=11;
y=20;
resultado=0;

if (x>10 && y>10){
	resultado = x + y ;
}else{
	resultado = x * y; 

}

console.log("El resultado es " + resultado);

// Sumar dos variables si al menos una de ellas es mayor de lo contrario multiplicarlos.

if(x>10||y>10){
	resultado = x + y;
}else{
	resultado = x * y;
}

console.log("El resultado es " + resultado);

// Mostrar mensaje de bienvenida incluyendo nombre y apellido, solo si coinciden con los valores "Belen" y "Alegre"

nombre= "Belen";
apellido= "Alegre";
bienvenida = "";

if (nombre=="Belen" && apellido == "Alegre"){
	bienvenida = "Bienvenida a ADA " + nombre + ", " + apellido;
	console.log(bienvenida);
}

console.log(bienvenida);
bienvenida="";