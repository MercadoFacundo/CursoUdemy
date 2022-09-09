const express = require('express');
//vamos a llamar el archivo de services que esta en la carpeta de dependencias
const Service = require('./src/service');

//debo crear una aplicacion de express y ejecutarlo
const app = express();
//Puerto
const PORT = 3000;
//le vamos a dar la capacidad a nuestro servidor de recibir datos
//utilidad de express
app.use(express.json())
//vamos a decirle a la aplicacion que se encargue de escuchar las peticiones de nuestro
//servidor con la url base
//el primer parametro es el request: la peticion que haga a nuestro servidor
//el segundo el response: es la respuesta que enviamos a nuestro cliente
app.get('/', (req, res) => {
    res.json({
        message: "Lista de usuarios",
        body: Service.getUsers()
    })
})

//Vamos a trabajar en las rutas,podemos pedir parametros para enviar respuestas
//Esos parametros van a actuar como variables
app.get('/:id', (req, res) => {
    let {params : {id}} = req
    let user = Service.getUsers(id)

    res.json({
        message: `Usuario ${id}`,
        body: user//traemos al usuario gracias al id
    })
})

//construir un enpoint modificacion
app.put('/:id', (req, res) => {
   //Respuesta
})
//Borrar
app.delete('/:id', (req, res) => {
   //Respuesta
})

app.post('/', (req, res) => {
    //al body le vamos a dar el nombre de newuser
    let {body: newUser} = req;
    //Agregamos el status 201 que es de la creacion del nuevo usuario, se aprecia en postman
    res.status(201).json({
        message: 'Usuario creado',
        //vamos a mostrar el ultimo usuario creado
        body: Service.createUsers(newUser)
    })
})

//para recibir peticiones primero tenemos que levantar la aplicacion
app.listen(PORT, () => {
    //le decimos que escuche en nuestra pc "localhost": "el puerto en el que estamos escuchando"
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});