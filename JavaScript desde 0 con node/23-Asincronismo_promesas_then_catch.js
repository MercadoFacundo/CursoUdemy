//THEN - CATCH
/* Promesas
nos ayudan a controlar funciones asincronas y ayuda a verificar si se resuelve
adecuadamente si obtenemos los datos o no se esta resolviendo adecuadamente*/

//getdata1 es una funcion que retorna a una nueva promesa vamos a poder pasarle un parametro
const getData1 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Facu',
                apellido: 'Mercado'
        })
        }, 3000);
        
    } else {
        reject('No pudimos obtener los datos')
    }
})
//encadenar promesas
const getData3 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Pablo',
                apellido: 'manes'
        })
        }, 3000);
        
    } else {
        reject('No pudimos obtener los datos')
    }
})
/*then: en caso que se resuelva exitosamente
catch: para que atrape errores*/
console.log('inicio');
getData1(false)
    .then((data) => {
        console.log(data);
        return getData3(true)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
console.log('fin');


/*const suma = new Promise((res, rej) => {
    if (true) {
        res()
    }
});*/

//getdata2 es igual a una nueva promesa, no podemos pasarle un parametro.
const getData2 = new Promise((resolve, reject) => {})

