//CONTROL DE FLUJO

//Estructura IF

/*if (condicion){
}else if (condicion){

}else{

}
*/

var llueve = true;
if (llueve) {
    console.log('Necesito un paraguas');
}

var administrador = 'administradora';
if (administrador === 'administrador'){
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18
var edadPersona = 12;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
}

var semaforo = 'rojo'
if (semaforo === 'verde') {
    console.log('Arranca');
}else if (semaforo === 'amarillo') {
    console.log('Preparate');
}else{
    console.log('Espera');
}

//ESTRUCTURA DE SWITCH

/*
switch (expresion) {
    case expresion:
       -----------codigo 
        break;
    case expresion:
        ------------codigo
        break;

    default:
        -----------console.log()
        break;
}
*/
var producto = 'manzana';
switch (producto) {
    case 'papa':
        console.log('Las papas salen $50 el kg');
        break;
    case 'naranja':
        console.log('Las naranjas salen $70 el kg');
        break;
    case 'manzana':
        console.log('Las manzanas salen $85 el kg');
        break;
    default:
        console.log('No disponemos de ese producto');
        break;
}
//en el caso de que cuesten lo mismo
var producto = 'papa';
switch (producto) {
    case 'papa':
    case 'naranja':
        console.log('Las papas y naranjas salen $70 el kg');
        break;
    case 'manzana':
        console.log('Las manzanas salen $85 el kg');
        break;
    default:
        console.log('No disponemos de ese producto');
        break;
}