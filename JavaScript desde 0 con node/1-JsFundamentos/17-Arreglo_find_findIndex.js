//FIND, FINDINDEX

/*find: se va a encargar de buscar un elemento que coincida con una condicion dentro del arreglo
y nos lo va a retornar

findindex: en base a una condicion nos va retornar la posicion de un elementodentro del Array.*/

//FIND
var clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Pedro'},
    {id: 3, nombre: 'Juan'},
    {id: 4, nombre: 'Facu'},
    {id: 5, nombre: 'Miriam'},
    {id: 1, nombre: 'Ada'}
]
//siempre va retornar el primer elemento que coincida con el parametro
//fine Retorna un solo elemento
var cliente = clientes.find((cliente) => cliente.id === 1)
//filter todos los que coinciden
var filter = clientes.filter((cliente) => cliente.id === 1)
console.log(clientes);
console.log(cliente);
console.log(filter);

//FINDINDEX

var clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Pedro'},
    {id: 3, nombre: 'Juan'},
    {id: 4, nombre: 'Facu'},
    {id: 5, nombre: 'Miriam'},
    {id: 1, nombre: 'Ada'}
]
var posicion = clientes.findIndex((cliente) => cliente.id === 2)
console.log(posicion);
console.log(clientes[posicion]);
