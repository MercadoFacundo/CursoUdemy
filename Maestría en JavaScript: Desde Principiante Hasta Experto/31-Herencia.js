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
}
//Sera la clase hija de la clase Persona
//Tiene que llevar los parametros de la clase padre y agregarle lo de 
//su clase
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
}

let Persona1 = new Persona("luis","Hernandez")

let Persona2 = new empleado("ana","lopez","desarrollo")

console.log(Persona2.llamarNombre);
console.log(Persona2.llamarApellido);
console.log(Persona2.departamento);