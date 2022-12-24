
console.log('Hola mundo')


//Funcion con nombres ------------------------------------------------------
function hello(name) {
    return "Javascript " + name
}
console.log(hello("facu"))

//Funcion de suma ----------------------------------------------------------
function add (x, y) {
    return x + y
}
console.log(add(10, 20))

//Funcion suma en el caso de no tener el segundo parametro ----------------------
function add (x, y) {
    if (y === undefined){
        y = 0
    }
    return x + y
}
console.log(add(10))

function add (x, y = 0) {
    return x + y
}
console.log(add(10))

//Objetos -----------------------------------------------------------------
const user = {
    name: 'facundo',
    lastname: 'mercado',
    age: 27,
    address: {
        country: 'Argentina',
        city: 'La Rioja',
        street: 'Calle siempre viva 123'
    },
    firends: ['brandom', 'elena']
}
console.log(user.address.city)

// nuevo objeto -------------------------------------------------------------
const name = 'laptop'
const price = 3000

const newProduct = {
    //name: name,
    //price: price
    name,
    price
}
console.log(newProduct)

//Manipulacio del DOM ----------------------------------------------------
/*let title = document.createElement('h1')
const button = document.createElement('button')
//Agregamos valor al titulo
title.innerText = 'Hola mundo desde js'
button.innerText = 'click'
//Agregamos un elemento con appened
document.body.append(title, button)
// agregamos un evento al button y cambiamos el nombre al titulo
button.addEventListener('click', function() {
    if (title === 'Hola mundo desde js'){
        title.innerText = 'texto actualizado desde js'
    }
    else {
        title.innerText = 'Hola mundo desde js'
    }
   
})
*/

//Onjeto como parametro -------------------------------------------------
const usuario = {
    name: 'joe',
    age: 30
}

function printInfo(usuario) {
    return '<h1> Hola ' + usuario.name + '</h1>'
}
console.log(printInfo(usuario))
document.body.innerHTML = printInfo(usuario)

//Metodos de array (map, filter, foreach, contact)------------------------
const names = ['ryan', 'joe', 'maria']

const newNames = names.map(function(name) {
    return name
})
console.log(newNames)


//.find es para buscar un elemento
const nameFound = names.find(function(name) {
    if (name === 'joe'){
        return name
    }
})
console.log(nameFound)

//.filter Sirve para sacar un elemento de un array
const partes = ['rueda', 'camara', 'cubierta']
const partes1 = ['rulemanes', 'frenos']
const nuevasPartes = partes.filter(function(name) {
    if (name === 'rueda'){
        return name
    }
})
console.log(nuevasPartes)
console.log(partes)
//Concatenar
const Todaspartes = partes.concat(partes1)
console.log(Todaspartes)

//Spread operator -------------------------------------------------------------
//array
console.log([...partes, ...partes1])
//objeto
const auto = {
    marca: 'audi',
    modelo: 'a1'
}
const ciudadania = {
    pais: 'Alemania'
}
const autoInfo = {
    ...auto,
    ...ciudadania
}
console.log(autoInfo)
//Import --------------------------------------------------------------
/*import {sumar, restar} from './add.js'
console.log(sumar())
console.log(restar())*/

//Optional Chaining --------------------------------------------------
const person = {
    name: 'ryan',
    address: {
        city: 'london'
    },
    location: {}
}
//accede al valor city si existe la location
console.log(person.location?.city)




