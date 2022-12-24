import { createElement, useState } from "react"

export function Lista() {
    const [usuario, setUsuario] = useState('')

    //Esto se resuelve con un ARRAY!

    /*REALIZAR UN PROGRAMA QUE MUESTRE UN LISTADO CON NOMBRES. UNA ENTRADA DE 
    TEXTO Y UN BOTON DEBEN PERMITIR AGREGAR UN NOMBRE A LA LISTA. NO PERMITIR
    EL INGRESO DE NOMBRES REPETIDOS AVISANDO AL USUARIO QUE YA NO EXISTE EL NOMBRE. 
    TAMPOCO PERMITIR EL INGRESO DE MAS DE 10 NOMBRES(DESABILITAR BOTON CUANDO 
        SE CARGAN 10 NOMBRES). AGREGAR TAMBIEN A CADA NOMBRE UN BOTON QUE PERMITA
    QUITAR EL NOMBRE DE LA LISTA. PREGUNTAR AL USUARIO SI DESEA QUITARLO. */
    

    return <div>

            <h2>Ejercicio 2</h2>
            <input onChange={event => setUsuario(event.target.value)}></input>
            <button onClick={() => {
                
            }}>Agregar</button>
            
            <ul name="ul">
                <li>asda</li>
            </ul>
    </div>
}