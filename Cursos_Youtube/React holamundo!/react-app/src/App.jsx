
import './App.css'
import Menu from '../components/Menu'
import { useState } from 'react';
import Hijo from "../components/Hijo";
import Hijo2 from '../components/Hijo2';
import CallApi from '../components/CallApi';
import Formulario from '../components/Formulario';
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';


function App() {
//01-------------
  const saySomething = () => {
    console.log("const Something");
  }
//---------------------------------------------
//02-variable [nombredelamisma, actualizador]=useState(comience por cero)
  const [number, setNumber] = useState(0)
//  let number = 0;
  const Agregar = () => {
    //number++
    setNumber(number + 1)
    console.log(number);
  }
//03- al contener un valor la variable reactiva no se deja modificar
const [myText,setMyText] = useState("escribir")
const [myValue,setMyValue] = useState("asd")
//para eso se crea el handleInput con el onChange:
//es un controlador de eventos que se activa cuando el usuario cambia 
//el valor de un input, select o elemento del DOM.
//e es el valor del evento, en este caso onchange
const handleInput = (e) =>{
  console.log(e.target.value);//Ubicacion del valor elementos
  setMyValue(e.target.value)
}
/*04- */
const condition = false
/*05- */
const peliculas = ["Cars","Dragon Ball Super","Star Wars","Los Simpsons"]
{/*Se mapea las peliculas y se las retorna dentro de un <p>
la propiedad key es asignar un valor único a cada elemento de una lista de datos*/}
const HTMLpeliculas = peliculas.map(pelicula => {
  return <p key={pelicula}>{pelicula}</p>
})
/*06- agregar el indice al array*/
const HTMLpeliculas1 = peliculas.map((pelicula,index) => {
  return <p key={pelicula}>{index + 1}-{pelicula}</p>
})
/*07- */
const animales = [
{id: 1, name: "perro", edad:5 },
{id: 2, name: "gato", edad: 3},
{id: 3, name: "loro", edad: 10}
]
const HTMLanimales = animales.map(animal => {
  return (<div key={animales.id}>
    <p>Tipo de animal: {animal.name}</p>
    <p>Edad: {animal.edad}</p>
    </div>)
})
/*08- Props - Componente padre a hijo*/
let variable = "variable de padre"
const persona = {
  nombre: "Facundo",
  Apellido: "Mercado",
  Edad: "29"
}
/*09- Login*/
//Use state que empieza vacio en el titulo
const [displayName, setDisplayName] = useState("")
//variable que va a setear el nombre en el h2
//04)recibira el username facundo y lo seteara en la constante
//displayname
const login = (name) => {
  setDisplayName(name)
}
/*09- ocultaremos y mostraremos un cartel cada vez que clickeemos
un boton*/
const [mostrar,setMostrar] = useState(true)
/*13- Paginas - rutas*/





return (
    <div>
{/*01-este es el componente que importamos desde la carpeta components*/}
      <h1 onClick={saySomething}>Hola mundo</h1>
      <h1 onClick={()=>{
        console.log("Something dentro del on click");
      }}>otra forma</h1>
{/*02-vamos a hacer que se renderice el numero que aumente por cada click en h2*/}
      <h2 onClick={Agregar}>Number: {number}</h2>
{/*03- actualizar una variable reactiva que contiene un valor*/}
      <input type="text" placeholder={myText} value={myValue} 
      onChange={handleInput}/>
{/*04-Condicionar un elemento*/}
      <h1>Renderizado condicional</h1>
      {condition ? (<h2>La condicion se cumple</h2>) : (<h2>La condicion no se cumple</h2>)}
{/*05- Renderizado de listas con map
la propiedad key es asignar un valor único a cada elemento de una lista de datos*/}
      <h1>Renderizado de listas</h1>
      {HTMLpeliculas}
{/*06- indexamos la lista */}
      {HTMLpeliculas1}
{/*07- renderizamos listas con mas elementos*/}
      {HTMLanimales}
{/*08- Props importamos el componente hijo al padre, ahora de padre a hijo
los nombres se lo agregamos nosotros como atributo*/}
      <Hijo mensaje="Msg del componente padre" varia={variable} objeto={persona}></Hijo>
{/*09- Login*/}
      <h1>props | cumunicacion hijo - padre</h1>
{/*aca es donde vamos a almacenar el nombre, pero empieza 
vacio por el useState
 05) finalmente se setea facundo*/}
      <h2>Hola {displayName}</h2>
{/* 03)nombramos un variable llamada handleLogin, donde enviaremos
la constante login al hijo menu*/}
      <Menu handleLogin={login}></Menu>
{/*10- useEffect()*/}
      <h1>Ciclo de vida de componentes</h1>
      {/*Cada vez qu toco el boton, el mostrar se pone en contrario
      ya sea true o false */}
      <button onClick={() => {setMostrar(!mostrar)}}>mostrar o no</button>
      {/*si es positivo se muestra y si es negativo se oculta */}
      {mostrar && <Hijo2></Hijo2>}
{/*11- traer una api*/}
      <CallApi></CallApi>
{/*12- Formulario simple*/}
      <Formulario></Formulario>
{/*13- Paginas - rutas - links*/}
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
      </Routes>




    </div>
  )
}


export default App
