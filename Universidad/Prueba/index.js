
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

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

app.get('/api/animales', (request, response) =>{
    response.json(animales)
})

app.get('/api/animales/:id', (request, response) =>{
    const id = Number(request.params.id)
    const animal = animales.find(animal => animal.id === id)
    if (animal){
        response.json(animal)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/animales/:id', (request, response) =>{
    const id = Number(request.params.id)
    animales = animales.filter(animal => animal.id !== id)
    console.log(animales);
    response.status(204).end()
})

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
