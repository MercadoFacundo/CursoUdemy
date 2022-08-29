/*REDUCE --------------------------------------------------------------------------------------------------
Nos ayuda reducir todo un array a un solo valor, este valor muede ser 
numerico, string, booleano, arg, objeto*/

var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];