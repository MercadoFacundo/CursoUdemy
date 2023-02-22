var productos = [
    {nombre : 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalones', precio: 25}
];

//creamos un nuevo objeto agregando las propiedades
//de producto. copiandolo
var productosImpuestos = productos.map((producto) => {
    return {
        
        ...producto,
        impuesto: .12
    }
})
//creamos nuevamente un objeto para mostrar solamente los precios
var precio = productos.map((producto) => producto.precio)

console.log(productos);
console.log(productosImpuestos);
console.log(precio);