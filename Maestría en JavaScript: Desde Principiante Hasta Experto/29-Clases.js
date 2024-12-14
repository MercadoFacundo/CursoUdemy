//Clase, contiene propiedades y comportamientos.

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//De esta manera creamos con la clase persona nuevos objetos
let persona1 = new Persona("Facundo","Mercado");
console.log(persona1);

let persona2 = new Persona("luis", "bueno")
console.log(persona2);