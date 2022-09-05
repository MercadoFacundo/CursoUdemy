//ASYNC - AWAIT

//otra forma de resolver promesas, despues de ver lo dificil que es leer then . catch

const getData = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Facu',
                apellido: 'Mercado'
        })
        }, 3000);
        
    } else {
        reject('No pudimos obtener los datos 1')
    }
})
const getData2 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Pablo',
                apellido: 'manes'
        })
        }, 3000);
        
    } else {
        reject('No pudimos obtener los datos 2')
    }
})

//para que funcione await debe existir async
//try catch:ella nos va ayudar a encontrar los errores y atraparlas en un catch

const main = async () => {
    try {
        let resultado = await getData(false)
        let resultado2 = await getData2(true)
        console.log(resultado);
        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
}
main()