let persona = {
    //propiedades
    nombre:"Facundo",
    apellido:"Mercado",
    email:"Facundo@gmail.com",
    edad:29,
    idioma:"es",
    get lang(){
        //toUpperCase te devuelve mayuscula
        return this.idioma.toUpperCase()
    },
//os getters y los setters son construcciones habituales de los 
//objetos que permiten acceder a valores o propiedades, sin 
//revelar la forma de implementación de las clases.
//El setter se define de manera similar al getter. En este caso 
//como hemos dicho se usará una función que recibe un dato que 
//haya que setear. La gracia está en el modo de uso de un setter, 
//que no es un método tradicional en el que se enviarían parámetros,
// sino que se invoca mediante una asignación.
    set lang(Lang){
        this.idioma = Lang.toUpperCase
    },

 //El ejemplo más claro de setters y getters en Javascript lo 
 //tenemos con el objeto persona. Este objeto podría tener un par 
 //de propiedades como el "nombre" y los "apellidos". 
 //Además podríamos desear conocer el nombre completo, 
 //pero realmente éste no sería realmente una propiedad nueva del 
 //objeto, sino el resultado de un cómputo de concatenación entre 
 //el nombre y los apellidos que tenemos en las dos propiedades 
 //anteriores.
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}
//le quitamos los parentecis
console.log(persona.nombreCompleto);
console.log(persona.lang);