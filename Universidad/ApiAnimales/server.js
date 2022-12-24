const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

//BD
const bdAnimales = {
    host: 'localhost',
    port: 3306,
    user:'root',
    password:'root',
    database: 'Animales'
}
//funcionamiento y conf
const app = express()
app.set('port', process.env.PORT || 9000)
app.use(myconn(mysql, bdAnimales, 'single'))
app.use(express.json())
app.use(cors())
//ruta
app.use('/animales', routes)

//funcionamiento
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto ', app.get('port'))
})