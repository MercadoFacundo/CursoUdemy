//funcion constructor de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Metodo
    this.NombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}
//crea una nueva persona dentro del parametro constructor
let padre = new Persona("orlando","juarez","orlando@gmail.com")
console.log(padre.NombreCompleto());

let madre = new Persona("maria","hernandez","maria@gmail.com")

console.log(madre.NombreCompleto());