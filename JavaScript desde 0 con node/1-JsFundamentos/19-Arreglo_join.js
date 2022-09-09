//JOIN
/*Join es un metodo que nos ayuda a unir todos los metodos de un arreglo y
generar un string con todos esos metodos. */

var elementos = ['aire', 'tierra', 'fuego', 'agua'];
//concatena con los parametros que le pasamos como el punto
var resultado = elementos.join('.');
console.log(resultado);

var clientes = [
    {id: 1, nombre: 'Ada'},
    {id: 2, nombre: 'Pedro'},
    {id: 3, nombre: 'Juan'},
    {id: 4, nombre: 'Facu'},
    {id: 5, nombre: 'Miriam'},
    {id: 1, nombre: 'Ada'}
]

//console.log(clientes.join());
var csvGenerator = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join(separador)
    let data = array.map((element) => Object.values(element).join(separador))
    console.log(headers);
    data.forEach(element => console.log(element));
}

csvGenerator(clientes);

/*
console.log(Object.values({id: 4, nombre: 'Facu'}));
console.log(Object.keys({id: 4, nombre: 'Facu'}));*/