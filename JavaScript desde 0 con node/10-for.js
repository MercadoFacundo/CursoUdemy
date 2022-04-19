//Ciclos

// for
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

for (let i = 1; i <= 5; i++) {
    console.log('Hola mundo!!');
    
}

//for in
//solo sirve para itirerar dentro de objetos
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
    console.log(clave, persona[clave]);
}

//For of
//ayuda a obtener datos interno de esa conexion
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
