//If else
let x = 50
let y = 50
if (x == y) {
    console.log(x + " es igual a " + y);
} else if(x < y){
    console.log(y + " es mayor a " + x);
}else if(x > y) {
    console.log(x + " es mayor a " + y);
}

//Switch

let numero = 4
let numeroTexto = "valor desconocido"
switch (numero) {
    case 1:
    numeroTexto = "numero uno"
        break;
    case 2:
    numeroTexto = "numero tres"
        break;
    case 3:
    numeroTexto = "numero cuatro"
        break;

    default:
    numeroTexto = "Caso no encontrado"
        break;
}

console.log(numero);
console.log(numeroTexto);