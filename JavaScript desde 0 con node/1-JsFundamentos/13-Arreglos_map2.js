var productos = [
    {nombre : 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalones', precio: 25}
];

var productosImpuestos = productos.map((producto) => {
    return {
        ...producto,
        impuesto: .12
    }
})

var precio = productos.map((producto) => producto.precio)

console.log(productos);
console.log(productosImpuestos);
console.log(precio);