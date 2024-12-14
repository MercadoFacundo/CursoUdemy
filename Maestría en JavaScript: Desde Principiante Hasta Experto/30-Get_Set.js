//Get para obtener informacion
//Set para modificas, instanciar informacion

class Persona{
    constructor(nombre, apellido){
        //Le ponemos el guion bajo para diferenciar el atributo al
        //nombre del get
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Este metodo nos va a devolver un valor que ya fue ionstanciado
    get llamarNombre(){
        return this._nombre;
    }

    //quiero modificar el atributo nombre, por ende hay que llamarlo
    //dentro de los parentesis
    set ModificarNombre(nombre){
        this._nombre = nombre;
    }
}

//De esta manera creamos con la clase persona nuevos objetos
let persona1 = new Persona("Facundo","Mercado");
//llamamos al set para instanciar un nuevo valor
persona1.ModificarNombre = "juen carlos"

//no usamos parentesis en nombre porque ya sabe que estamos llamando
//al metodo get
console.log(persona1.llamarNombre);