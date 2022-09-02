//concat - sort - slice - splice

//CONCAT
/*es un metodo nos permite concatenar dos arreglos */
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
//va a generar un array nuevo
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3);

//SORT
/*es un metodo de ordenamiento */

var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());
//Utiliza la letra inicial para ordenar (codigo asqui)
var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());
//lo ordena con el primer caracter
var array = [1, 10000, 21, 30, 4];
console.log(array.sort());
//ordenar por el peso numerico
var ordenar = array.sort((a, b) => a - b);
console.log(ordenar);
//si lo queremos hacer descendente
var ordenar = array.sort((a, b) => b - a);
console.log(ordenar);

//SPLICE
/*Este metodo nos ayuda a remover o modificar elementos de un array o al array en si
Es mutable asi que modifica el array */
var nombres = ['Facundo', 'Maxi', 'Eduardo'];
//el primer parametro muestra apartir de donde eliminar
//el segundo cuantos elementos borrar
//El tercero se usa para remplazar el elemento marcado en el segundo parametro
nombres.splice(1, 1, 'Ada');
console.log(nombres);

//SLICE
/*nos va a retornar una compia de una parte mas pequeña del array*/
var nombres = ['Facundo', 'Maxi', 'Eduardo'];
//dos parametros, 1 es de inicio de corte del array y el segundo la pocicion donde quiero
// cortar el arreglo
var resultado = nombres.slice(1, 2); //no incluye la ultima posicion
console.log(resultado);