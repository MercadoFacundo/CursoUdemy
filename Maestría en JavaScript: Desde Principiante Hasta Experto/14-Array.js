//Declaracion de array
let autos = new Array("red","blue","yellow",14);
const auto = ["toyota","renault","mazda","ford"];
console.log(autos);
console.log(auto);

//Recorrer el array- Siempre empieza por el indice cero 0
console.log(autos[2]);
console.log(auto[3]);
console.log("---------------------------");
//length es el total que hay dentro de un array
for (let i = 0; i < auto.length; i++) {
    console.log(i + ": "+ auto[i]); // Es el numero que ubica en el array
    
}

//Modificar un array

let colores = new Array("red","blue","yellow",14);
console.log(colores);
colores[3] = "green"
console.log(colores);

//agregar un elemento
colores.push("black")
console.log(colores);