import React, {useState} from 'react'

export const PrimerComponente = () => {
  let nombres = ['facu', 'pedro', 'flor']
  const [names, setNames] = useState(nombres)
  const [valor, setValor] = useState()

  const handleClick = () => {
    console.log('clg1', names);
    console.log('clg2', valor);
    if (names.length <= 9) {
      console.log('Se puede seguir agregando');
      if (names.includes(valor)){
        alert('Ya existe')
        console.log('ya existe');
      }else{
        setNames([...names, valor])
      }
    }else {
      alert('Se llego al limite')
    }
  }
    const handleRemove = (indexDelete) => {
      console.log(indexDelete);
      
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
    <div>PrimerComponente
      
      <input onChange={(e) => setValor(e.target.value)} value={valor} placeholder='ingrese nombre'></input>
      <button onClick={handleClick}  type='submit' id='agregar' disabled={names.length <= 9 ? false : true} >agregar</button>

        {
          names.map((user, index) => {
            return(
              <div>
                <li onClick={handleComplete} style={{color: activo ? 'red' : 'aa'}} key={index}>{user}</li>
                <button onClick={()=>handleRemove(index)}>x</button>
                <button onClick={()=>handleUpdate(index)}>actu</button>
              </div>
          )})
        }

    </div>
  )
}
