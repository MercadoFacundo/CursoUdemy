//aca donde vamos a trabajar con los datos, en esta carpeta es la que e encarga de manejar los datos
//Llamamos a mock data
const data = require('./MOCK_DATA.json');

//Desarrollar modulos en node utilizando estas palabras reservadas
//Este objeto se va a encargar de contener las funciones que se van a encargar de manipular los datos
module.exports= {
    getUsers: () => data,
    getUser: () => {
        let identificador = Number(id);
        let user = data.filter((persona) => persona.id === identificador)[0];
        return user;
    },
    createUsers: (dataUser) => {
        let newUser = {
            //generar un id automatico
            id: data.length + 1,
            ...dataUser,
        }
        data.push(newUser);
        //usamos esto para mostrar el usuario en el index utilizando el return
        return newUser;
    }
}