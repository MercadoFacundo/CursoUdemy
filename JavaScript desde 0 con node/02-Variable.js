/*Variables 'Almacena un valor'

3 formas de definir variables

var
let
const

*/

//Variables con VAR
var nombre = 'Facundo';
console.log(nombre);

var edad = 26; 
console.log(edad);

var persona = {
    nombre: 'Facundo',
    apellido: 'Mercado',
    edad: 26,
    direccion: {
        calle: 'siempre viva',
        numeroDeCasa: 123,
    },
    ciudadesVisitadas: [
        'la rioja',
        'cordoba',
        'mendoza'
    ]
}

var ciudad;
ciudad = 'La Rioja';
console.log(ciudad);

// Variables con LET

let hola = 'Facundo';
console.log(hola);

//let funciona dentro del bloque del codigo mientras 
//que var trabaja de forma global
//bloqeu de codigo
{
    let saludo = 'hola mundo';
    console.log(saludo);
}
//console.log(saludo);

//Variable Const
//Se escribe siempre con mayuscula
//La constante no puede estar vacia, debe inicializarce desde el
//comienzo
const NUMER_PI = 3.14;
console.log(NUMER_PI);

var Nombre = 'Facundo';
var Saludo = `hola soy ${Nombre}

Como estas?`;
console.log(Saludo);

