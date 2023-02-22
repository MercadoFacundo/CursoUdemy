//Ciclos

// for
/*
for(expresionInicial; expresionCondicional; exprecionDeActualizacion){

}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

for (let i = 1; i <= 5; i++) {
    console.log('Hola mundo!!');
    console.log(i);
    
}

//for in
//imprime una vez cada una de las clave cada vez que cumple un ciclo.
//solo sirve para itirerar dentro de "objetos"
/*
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

var persona = {
    nombre: 'Facundo',
    apellido:'Mercado',
    edad: 26
}

for (let clave in persona) {
    console.log(clave, persona.nombre);
    console.log(clave, persona[clave]);
}

//For of
//ayuda a obtener datos interno de esa conexion
//solo de puede recorrer objetos iterables "Cadenas de caracteres"
/*
for (const iterator of object) {
    
}
*/

var arreglo = [1, 2, 3, 4, 5];
var nombre = 'Facundo';
for (let valor of arreglo) {
    console.log(valor);
}
for (let valores of nombre) {
    console.log(valores);    
}
