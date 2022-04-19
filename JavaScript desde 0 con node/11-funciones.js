//FUNCIONES
/*
function nobreFuncion(params:type) {
    ---------Cuerpo de la funcion
}
*/

function saludar() {
    console.log('Hola soy Facundo');
}
//para llamar la funcion
saludar();

function saludo(nombre) {
    console.log(`hola soy ${nombre}`);
}
saludo('Facundo')

//esta retornando el valor asi que hay que almacenarlo
function saludar(nombre) {
    return `Hola soy ${nombre}`
}
var saluda = saludar('Facundo');
console.log(saluda);
console.log(saludar('hernesto jorge'));

//FUNCIONES DE EXPRESION
//funcion anonima
var suma = function(a, b) {
    return a + b;
}

console.log(suma(2, 2));

/*FUNCIONES FLECHA - ARROW FUNCTION
var restar = async (params:type) => {
    
}
*/

var restar = (a, b) => {
    return a - b;
}
console.log(restar(4, 2));

//otra forma
var resta = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a - b;
    } else{
        return 'Solo puede restar numeros'
    }
}
console.log(resta(4, '2'));

//otra forma mas implicita
var multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 2));

