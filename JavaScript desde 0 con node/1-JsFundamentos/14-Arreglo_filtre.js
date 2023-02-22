//FILTER
/*es inmutable - no se modifica el arreglo de origen
nos ayuda a recorrer elementos a dentro de un arreglo en base de 
una condicion que debe devolver un valor logico
*/

var estudiantes = [
  { nombre: "Facu", edad: 20, matriculado: true },
  { nombre: "hernan", edad: 25, matriculado: false },
  { nombre: "franco", edad: 23, matriculado: true },
  { nombre: "juan", edad: 21, matriculado: false },
  { nombre: "pablo", edad: 21, matriculado: true },
];

//var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21);
var filtrado = estudiantes.filter(
  (estudiante) => estudiante.edad >= 21 && estudiante.matriculado
);
console.log(estudiantes);
console.log(filtrado);
console.log(estudiantes);



//Podemos utilizar el metodo filter para eliminar un 



var estudiantes = [
  { nombre: "Facu", edad: 20, matriculado: true },
  { nombre: "hernan", edad: 25, matriculado: false },
  { nombre: "franco", edad: 23, matriculado: true },
  { nombre: "juan", edad: 21, matriculado: false },
  { nombre: "pablo", edad: 21, matriculado: true },
];


var filtrado = estudiantes.filter(
  (estudiante) => estudiante.nombre != 'Facu'
);
console.log(estudiantes);
console.log(filtrado);