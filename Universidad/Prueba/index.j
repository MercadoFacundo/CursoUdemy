const express=require('express')
const app = express()
const cors= require('cors')

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
