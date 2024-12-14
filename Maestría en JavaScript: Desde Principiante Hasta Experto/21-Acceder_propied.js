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
console.log(persona.apellido);
console.log(persona['apellido']);

//for in
for (nombrePropiedad in persona){
    //me trae el nombre de la propiedad
    //console.log(nombrePropiedad);
    //Me trae el nombre de la informacion que tiene esa propiedad
    console.log(persona[nombrePropiedad]);
}