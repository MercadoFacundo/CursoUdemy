import React, {useState} from 'react'

export const Ejercicio_1 = () => {
  let zoo = ['perro', 'lobo', 'toro']
  const [animal, setAnimal] = useState(zoo)
  const [valor, setValor] = useState()

  const handleClick = () => {
    console.log('clg1', animal);
    console.log('clg2', valor);
    if (animal.includes(valor)){
      alert('Ya existe ese animal')
      
      console.log('hola mundo');
    }else{
      setAnimal([...animal, valor])
    }
    
  }
    const handleRemove = (indiceDelete) => {
      console.log(indiceDelete);
     
      if(window.confirm('desea eliminar de la lista a este animal?')){
        const newAnimal = animal.filter((element, index) => index !== indiceDelete);
        console.log([newAnimal]);
        setAnimal(newAnimal) ;
      }else {

      }
      
      
      
  }


  return (
    <div>Ejercicio_1
      
      <input onChange={(e) => setValor(e.target.value)} value={valor} placeholder='ingrese un animal'></input>
      <button onClick={handleClick}  type='submit' id='agregar' >agregar</button>

        {
          animal.map((user, index) => {
            return(
              <div>
                <li key={index}>{user}</li>
                <button onClick={()=>handleRemove(index)}>x</button>
              </div>
          )})
        }

    </div>
  )
}
