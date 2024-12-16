//podemos utilizar rfce para que nos cree 

/*import React from 'react'

function Menu() {
  return (
    <div>Menu</div>
  )
}

export default Menu*/


import { useState } from "react";
import "./Menu.css"
//Activaremos los props, para recibir los datos del padre que enviamos
function Menu(props){
//Constante donde se almacena el nombre Facundo
  const [userName, setUserName] = useState("Facundo")
//constante handleClick, que se activa cuando hacemos click
//en el boton login
//- 02) se dispara esta contante
  const handleClick = () => {
//dentro de esta constante almacenaremos el handleLogin con el 
//usern name facundo
//- 03)mientras tanto, al existir una comunicacion con el padre
//a travez de prop.handleLogin se almacena el user name Facundo
    props.handleLogin(userName)
  }
    return (
        <div id="Menu" className="menu">
            <h2>Este es el componente hijo</h2>
{/*parrafo donde mostraos el nombre que usaremos */}
            <p>Nombre de usuario: {userName}</p>
{/* 01) al hacer click, se activa el handle click*/}
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

//Es necesario para exportar el componente
export default Menu;