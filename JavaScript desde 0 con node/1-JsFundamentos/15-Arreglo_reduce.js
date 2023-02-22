/*REDUCE --------------------------------------------------------------------------------------------------
Nos ayuda reducir todo un array a un solo valor, este valor muede ser 
numerico, string, booleano, arg, objeto*/

var calificaciones = [3, 5, 9, 10, 10];
//calificacion.reduce(acumulador, calificacion) => suma, inicio
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23, 20];

//Salida
/*{
  21: 3,
  43: 2,  
}*/

var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad] += 1;
  }
  return acumulador;
}, {});
console.log(edades);
console.log(resultado);

//Reduccion a un obejeto

var ventas = [
  { nombre: "camiseta", precio: 15, totalVendido: 10 },
  { nombre: "zapatilla", precio: 150, totalVendido: 8 },
  { nombre: "pantalon", precio: 20, totalVendido: 30 },
];

var resultado = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido;
  acumulador[producto.nombre] = `$ ${totalVentas}`;
  return acumulador;
}, {});
console.log(ventas);
console.log(resultado);

var estudiantes = [
  { nombre: "Facu", edad: 20, matriculado: true },
  { nombre: "hernan", edad: 25, matriculado: false },
  { nombre: "franco", edad: 23, matriculado: true },
  { nombre: "juan", edad: 20, matriculado: false },
  { nombre: "pablo", edad: 21, matriculado: true },
];

var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      if (item) {
        acumulador.matriculado += 1;
      } else {
        acumulador.noMatriculado += 1;
      }
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );

console.log(estudiantes);
console.log(resultado);
