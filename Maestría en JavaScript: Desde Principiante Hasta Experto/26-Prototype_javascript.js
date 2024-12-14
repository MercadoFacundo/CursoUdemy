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
//Para agregar la propiedad telefono y afecte a todos los objetos 
//padre madre usamos la sentencia prototype
Persona.prototype.telefono = "223232323"



//crea una nueva persona dentro del parametro constructor
let padre = new Persona("orlando","juarez","orlando@gmail.com")
//Agregamos una propiedad sin necesidad de meternos dentro del constructor

//padre.telefono = "2222222"
console.log(padre.telefono);

let madre = new Persona("maria","hernandez","maria@gmail.com")
console.log(madre.telefono);