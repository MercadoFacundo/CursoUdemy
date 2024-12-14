let Persona = {
    nombre : "luis",
    apellido : "bueno",
    email : "luisbueno@gmail.com",
    edad : 28,
    //Metodo
    NombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}
let Persona2 = {
    nombre : "alberto",
    apellido : "sanchez",
    
}
console.log(Persona.NombreCompleto());

//Quiero usar la funcion Nombre completo en la persona 2
//llamamos primero a la variable que tiene la funcion,
//colocamnos el nombre de ese metodo y mediante el call
//llamamos a la persona 2
console.log(Persona.NombreCompleto.call(Persona2));