
const express = require('express')
const app = express()

//para que el body pueda leer el contenido json
app.use(express.json())

let animales = [{
    "id": 0,
    "nombre": "loro"
},
{
    "id": 1,
    "nombre": "perro"
},
{
    "id": 2,
    "nombre": "gallina"
}]

// Se pasa los parametros de callback (funcion que se ejecuta
// cada vez que le llegue una peticion)
// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json'})
//     response.end(JSON.stringify(animales))
// })
// este servidor va a escuchar en un puerto

app.get('/', (request, response) =>{
    response.send('<h1>Hola mundo</h1>')
})

app.get('/api/animales', (request, response) =>{
    response.json(animales)
})
//GET ---------------------------------------------------
app.get('/api/animales/:id', (request, response) =>{
    const id = Number(request.params.id)
    const animal = animales.find(animal => animal.id === id)
    if (animal){
        response.json(animal)
    } else {
        response.status(404).end()
    }
    
    
})
//DELETE ---------------------------------------------------
app.delete('/api/animales/:id', (request, response) =>{
    const id = Number(request.params.id)
    animales = animales.filter(animal => animal.id !== id)
    console.log(animales);
    response.status(204).end()
    // if (animal){
    //     response.json(animal)
    // } else {
    //     response.status(204).end()
    // }
    
    
})
//POST --------------------------------------------------------
app.post('/api/animales', (request, response) =>{
    let animal = animales.map((animal) => animal.nombre)
    console.log(animal);
    console.log(request.body.nombre);
    if (animal.includes(request.body.nombre)){
        response.send('no se agregan repetidos');
    } else {
        const maxId = animales.reduce((acumulador, elementoActual) => 
        elementoActual.id > acumulador.id ? elementoActual: acumulador, animales[0]).id;
        const nuevoAnimal = {
            id: maxId + 1,
            nombre: request.body.nombre,
        };
        animales.push(nuevoAnimal);
        response.send(nuevoAnimal);
    }
    
})
//PUT -------------------------------------------------------
app.put("/api/animales/:id", (request, response) => {
    animales.map((animal) =>{
        if (animal.id == request.params.id){
            animal.nombre = request.body.nombre;
        } 
    });
    response.send("ok");
});




const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
