//Funciones - Son codigos reutilizables que se pueden usar varias 
// veces en nuestro aplicativo

function miFuncion(a, b){
    console.log("suma " + (a + b));
}

//Se reutiliza el codigo de la funcion
miFuncion(5, 4)
miFuncion(5,20)
miFuncion(50, 20)

// Return

function miFuncionb(c, d){
    return c + d
}
let resultado = miFuncionb(5, 4)
console.log(resultado);