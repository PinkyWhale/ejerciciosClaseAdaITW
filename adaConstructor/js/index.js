let alumno = new Alumno("Pepe", "Feliz", "12-07-1999", "4350")

console.log(alumno);

let materia = new Materia("fisica","lu y mier 19:00 a 22:00");

materia.addNota(9);

console.log(materia);

materia.addNota(8);

console.log(materia);



let promedioMateria = materia.calcularPromedio();

console.log("promedio materia: ", promedioMateria); 

alumno.addMateria(materia);

let m2 = new Materia ("quimica", "ma y ju 19 a 22 hs");

m2.addNota(7);
m2.addNota(5);

alumno.addMateria(m2);

let promAlumno = alumno.calcularPromedio();

console.log("promedio Gral.: ", promAlumno);