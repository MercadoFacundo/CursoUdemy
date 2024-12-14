//while - Este bucle en este caso se va a sumar hasta que se
// se deje de completar la condicion
let a = 0
while (a < 10) {
    console.log("El numero es " + a);
    a++
}

//Do While - Este bucle se va a ejecutar siempre una vez, ya que la 
//condicion se cumple despues de ejecutarlo. Esto quiere decir que
//Se va a ejecutar incluso cuando la condicion se cumpla
let b = 0
do {
    b++
    console.log("el numero es " + b);
} while (b < 10);