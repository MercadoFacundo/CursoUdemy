let persona = {
    //propiedades
    nombre:"Facundo",
    apellido:"Mercado",
    email:"Facundo@gmail.com",
    edad:29,
    //Metodo
    nombreCompleto:function(){
        return this.nombre + ' ' + this.apellido
    }
}
persona.telefono = "2344122"
//lo remplazara
persona.telefono = "111111"
//eliminar
delete persona.telefono;
delete persona.nombreCompleto;

console.log(persona);