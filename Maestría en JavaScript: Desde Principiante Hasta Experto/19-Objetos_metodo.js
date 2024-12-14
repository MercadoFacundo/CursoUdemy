let x = 10;

let nombre = "Facu";

//Objeto
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
//console.log(persona.nombre);
//console.log(persona.apellido);
//Asi llamamos al metodo
console.log(persona.nombreCompleto());