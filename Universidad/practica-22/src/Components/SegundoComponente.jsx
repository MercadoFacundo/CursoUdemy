import React, {useState} from 'react'

export const SegundoComponente = () => {
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
  const [names, setNames] = useState([animales])
  const [valor, setValor] = useState()

  const handleClick = () => {
    if (names.length <= 9) {
      console.log('Se puede seguir agregando');
      if (names.includes(valor)){
        alert('Ya existe')
        console.log('ya existe');
      }else{
        setNames([...names, valor])
      //   fetch('http://localhost:3001/api/animales', {  // Enter your IP address here
      //   method: 'POST', 
      //   mode: 'cors', 
      //   body: JSON.stringify(animales) // body data type must match "Content-Type" header
  
      // })
      }
    }else {
      alert('Se llego al limite')
    }
  }
    const handleRemove = (indexDelete) => {
      const newNames = names.filter((element, index) => index !== indexDelete);
      console.log([newNames]);
      setNames(newNames);
  }
    const handleUpdate = (indexUpdate) =>{
    const NewNames = names.map((element, index) => {
      if (index === indexUpdate){
        console.log(valor);
        names.splice(indexUpdate, 1, [valor])
        setNames([...names])
        return {
        }
      }
    })}

    const [activo, setActivo] = useState(false)
    const handleComplete = (indexComplete) => {
      setActivo(current => !current)

  }

  return (
    <div>SegundoComponente
      
      <input onChange={(e) => setValor(e.target.value)} value={valor} placeholder='ingrese nombre'></input>
      <button onClick={handleClick}  type='submit' id='agregar' disabled={names.length <= 9 ? false : true} >agregar</button>

        {
          names.map((user, index) => {
            return(
              <div>
                <li onClick={handleComplete} key={index}>{user}</li>
                <button onClick={()=>handleRemove(index)}>x</button>
                <button onClick={()=>handleUpdate(index)}>actu</button>
              </div>
          )})
        }

    </div>
  )
}