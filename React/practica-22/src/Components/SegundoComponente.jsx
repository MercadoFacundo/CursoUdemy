import React, {useState} from 'react'

export const SegundoComponente = () => {

  const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])

  const agregarElemento = () => {
    console.log('click');
    setArrayNumero([...arrayNumero,6])
}
  return (
    <div>SegundoComponente
      <input></input>
      <button onClick={agregarElemento}>agregar</button>

      {
        arrayNumero.map((item, index) => {
          return(
            <div >
              <li key={index} style={{display: 'inline-block'}}>{item}</li>
              <button>x</button>
            </div>
        )})
      }

    </div>
  )
}
