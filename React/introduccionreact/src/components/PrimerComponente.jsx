//Utilizando rafc se puede agregar la plantilla de un 
//componente

import React, { useState } from 'react'


export const PrimerComponente = () => {

    //let nombre = 'Facundo';
    let web = 'www.udemy.com'
    let cursos = [
        'javascript desde 0 a esperto',
        'sql desde 0 a experto',
        'Introduccion a react'
    ]

    const [nombre, setNombre] = useState("Facundo")

    const cambiarNombre = (nuevoNombre) => [
        setNombre(nuevoNombre)
    ]


  return (
    <div>PrimerComponente
    <p>mi nombre es {nombre} y estoy estudiando en {web}</p>

    <input type='text' onChange={e => cambiarNombre(e.target.value)}></input>

    <button onClick={e => cambiarNombre('hola mundo')}>Cambiar nombre</button>

    <ul>
        {
        
        cursos.map((curso, index) => {
            return (
                <div className='s' style={{color: 'red', display:'inline'}}>
                    <li key={index}>
                        {curso}
                        <button>x</button>
                    </li>
                </div>
            )
            })
        
        }
    </ul>


    </div>
  )
}
