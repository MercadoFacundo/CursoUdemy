import React, {useState} from 'react'

export const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido:''
    })
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(datos.nombre + ' ' + datos.apellido);
        setDatos({...datos,})
    }

  return (
    <div>Formulario

        
        <form onSubmit={enviarDatos} className='row'>
        <input onChange={handleInputChange} type={'text'} name='nombre' placeholder='ingrese nombre'></input>
        <input onChange={handleInputChange} type={'text'} name='apellido' placeholder='Ingrese apellido'></input>
        <button type='submit'>Agregar</button>
        
        </form>


    </div>
  )
}
