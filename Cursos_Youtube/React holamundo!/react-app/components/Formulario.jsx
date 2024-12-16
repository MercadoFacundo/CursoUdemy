import React, { useState } from 'react'

function Formulario() {
//Es un aviso en la consola que indicaremos el la etiqueta form
    const handleSubmit = (e) => {
//evita el comportamiento del formulario de actualizar la pagina cada
//vez que se envia un formulario
        e.preventDefault();
        console.log(("El formulario se ah enviado"));
        console.log(user);
    }
    //Recibe el evento e
    const handleUserNAmeInput = (e) =>{
        //console.log(e.target.value);
/*El operador de propagación (...) se usa aquí para hacer una copia 
superficial del objeto user. Esto asegura que cualquier valor del 
estado user que no se mencione explícitamente en la actualización 
no se vea afectado y se mantenga igual. */
        setUser({...user, username: e.target.value})
    }
    const handlePaswordInput = (e) =>{
        setUser({...user, password: e.target.value })
    }

//variable donde almacenaremos los datos
    const [user, setUser] = useState({
        username:"",
        password: "" 
    })

  return (
    <div>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
{/*En este caso, el atributo for de la etiqueta <label> tiene el 
valor "username", que coincide con el ID del campo de entrada 
<input>. Esto establece una asociación entre el texto descriptivo 
“Nombre de Usuario:” y el campo de entrada correspondiente, lo que
 mejora la accesibilidad y la usabilidad del formulario. */}
                <label htmlFor="username">Usuario: </label>
                <input type="text" id='username' onChange={handleUserNAmeInput}
                value={user.username}/>
            </fieldset>
            <fieldset>
                <label htmlFor="password" >Contrasena: </label>
                <input type="password" id='pasword' onChange={handlePaswordInput}
                value={user.password}/>
            </fieldset>
            <button>Enviar</button>
        </form>
        <button onClick={()=> setUser({username: "", password: ""})}>Logout</button>
    </div>
  )
}

export default Formulario