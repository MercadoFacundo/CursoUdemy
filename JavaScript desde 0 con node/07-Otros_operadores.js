//OPERADOR DE CONCATENAR (+) solo con cadenas de texto

var nombre = 'Facu'
var apellido = 'Mercado'
var nombreCompleto = nombre +' '+ apellido

console.log(nombreCompleto);

//OPERADOR CONDICIONAL (condicion - ? - val1 o val2)
console.log(2 > 3 ? 'el numero es mayor' : 'es menor');

//OPERADOR DE DESESTRUCTURACION

var persona = {
    nombre: 'Facundo',
    apellido: 'Mercado'
}
//sacar una propiedad 
//puedes asignarle un nuevo nombre
var {nombre:xyz, apellido} = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

//desestructuracion de arreglo

var arreglo = [1, 2, 3, 4, 5]
var [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion);
console.log(dos);

//OPERADOR DE MIEMBRO O DE ACCESO DE PROPIEDAD
//notacion punto
var persona = {
    nombre: 'Facundo',
    apellido: 'Mercado'
}

console.log(persona.nombre);
console.log(persona.apellido);

//notacion por corchetes

var persona = {
    nombre: 'Facundo',
    apellido: 'Mercado'
}
console.log(persona['nombre']);

//notacion por corchete en arreglo
var arreglo = [23, 25, 27, 28, 29, 22]
console.log(arreglo[2]);

//OPERADOR DE DETERMINACION DE TIPO
console.log(typeof 'Facundo');
console.log(typeof 21);
console.log(typeof true);
