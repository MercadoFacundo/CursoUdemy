//Clase, contiene propiedades y comportamientos.

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get llamarNombre(){
        return this._nombre;
    }
    set ModificarNombre(nombre){
        this._nombre = nombre;
    }
    get llamarApellido(){
        return this._apellido;
    }
    set ModificarNombre(apellido){
        this._apellido = apellido;
    }
    NombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //static - Este metodo nos muestra un mensaje
    static saludar(){
        console.log("Hola Mundo =) Static");
    }
    //Podemos llamar a un objeto
    static saludar2(Persona1){
        console.log(Persona1.llamarNombre + " " + Persona1.llamarApellido);

    }
    //atributo no static
    email = "Correo empresarial"


}

class empleado extends Persona{
    constructor(nombre, apellido, departamento){
        //la plabra reservada Super, debe llevar los parametros del padre
        super(nombre, apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    nombreCompleto(){
        return super.NombreCompleto() + " " + this._departamento;
    }
    
}

let Persona1 = new Persona("luis","Hernandez")

let Persona2 = new empleado("ana","lopez","desarrollo")


//llama al mensaje - Este metodo se extiende a la clase
//empleado y todo lo que lleve static hay que llamarlo con el atributo
//de la clase
Persona.saludar();
empleado.saludar();



Persona.saludar2(Persona1)
//no static se tiene que llamar desde un objeto ya instanciado
console.log(Persona1.email);
