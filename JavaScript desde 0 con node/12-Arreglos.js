//MANIPURACION DE ARREGLOS

//forEatch
var letras = ['a', 'b', 'c', 'd', 'e'];

console.log(letras.length);

for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log(element);
}

//funcion
//nos permite recorrer los elemento de los arreglos
letras.forEach((elemento) => {
    console.log(elemento);
})
//Si se lo quiere comprimir mas
letras.forEach((elemento) => console.log(elemento));

console.log('=======================================================');
// FUNCIONES: push - shift - pop
//push sirve para agregar otro elemento
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f');
console.log(letras);

//shift sirve para extraer el primer elemento del arreglo
//retorna el elemento a alguna variable si queremos
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);

//Pop extrae el ultimo elemento del arreglo
//retorna el elemento a alguna variable si queremos
var ultimoElemento = letras.pop();
console.log(ultimoElemento);
console.log(letras);

console.log('=======================================================');

// mapeo - map (no modifica el origen del arrego como los anteriores)
//te devuelve un nuevo arreglo
var estudiantes = ['Facundo', 'jorge', 'hernesto', 'katrina'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia);
//El arreglo no se modifica - no muta
console.log(estudiantes);

//forma corta que tiene la implementacion del return
var asistencias = estudiantes.map((nombre) => `${nombre}.`)
console.log(estudiantes);
console.log(asistencias);
//El arreglo no se modifica - no muta
console.log(estudiantes);
