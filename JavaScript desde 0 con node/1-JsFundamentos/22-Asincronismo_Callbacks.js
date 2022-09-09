//CALLBACKS
/*es una funcion que se pasa como argumento a otra funcion, esta tecnica
nos permite llamar una funcion dentro de otra una vez que la primera
 funcion, o la funcion padre haya terminado los procesos. cuando lo 
 termina llama a la funcion como parametro*/
const suma = (a, b, cb) => cb(a + b)  //cb = es la abrebiatura de callbacks
    
const imprimir = (data) => console.log(data);

suma (1, 2, imprimir)

//otro ejemplo
//metodo para traer datos

const getData = (cb, cbError) => {
    if(false){
        setTimeout(() => {
            cb({
                nombre: 'facu',
                apellido: 'mercado'
            })
        }, 3000)
    } else {
        cbError(new Error('No se pudo obtener los tados'))
    }
};
const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);
getData(imprimirData, errorHandler);