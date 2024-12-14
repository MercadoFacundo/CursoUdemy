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

//concatenar cada valor
console.log(persona.nombre + " " + persona.apellido);

//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//array
let = personaArray = Object.values(persona)
console.log(personaArray);

//JSON
let = personaString = JSON.stringify(persona)
console.log(personaString);