//INCLUDES
/*Esta funcion nos ayuda a determinar si en un arreglo existe un elemento
en especifico, y nos va a devolver verdadero o falso */

var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log('facundo'.includes('cu'));

var buscador = (parametro) => {
    var clientes = [
        {id: 1, nombre: 'Ada'},
        {id: 2, nombre: 'Pedro'},
        {id: 3, nombre: 'Juan'},
        {id: 4, nombre: 'Facu'},
        {id: 5, nombre: 'Miriam'},
        {id: 1, nombre: 'Ada'}
    ]

    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('a'));