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
    //sobreescritura - llamo a la propiedad que tiene cla clase Persona
    //y le agrego el departamento
    nombreCompleto(){
        return super.NombreCompleto() + " " + this._departamento;
    }
}

let Persona1 = new Persona("luis","Hernandez")

let Persona2 = new empleado("ana","lopez","desarrollo")

console.log(Persona2.nombreCompleto());
