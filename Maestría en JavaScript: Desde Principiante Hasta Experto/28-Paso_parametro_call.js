let Persona = {
    nombre : "luis",
    apellido : "bueno",
    email : "luisbueno@gmail.com",
    edad : 28,
    //Se pretende pasar la profesion y telefono
    NombreCompleto : function(profesion, telefono){
        return profesion + "; " + this.nombre + " " + this.apellido + ", " + telefono
    }
}
let Persona2 = {
    nombre : "alberto",
    apellido : "sanchez",
    
}
//por ende debemos pasarselo
console.log(Persona.NombreCompleto("programador", "65656565"));

console.log(Persona.NombreCompleto.call(Persona2, "ingeniero", "87878787"));