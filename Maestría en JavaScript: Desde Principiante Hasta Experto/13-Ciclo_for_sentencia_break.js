//FOR- bucleUn ciclo for se repite hasta que una condición 
//especificada se evalúe como false. El bucle for de JavaScript 
//es similar al bucle for de Java y C.

for (let contador = 0; contador < 4; contador++) {
     // Se ejecuta 4 veces, con valores del paso 0 al 3.
    console.log(contador);
    
}

//BREAK - Se utiliza para finalizar una frecuencia del procesamiento
// de un caso concreto

for (let cont = 0; cont <= 10; cont++) {
    // traeme los numeros que son pares
   if (cont % 2 == 0) {
    console.log(cont);
    break; 
   }
}