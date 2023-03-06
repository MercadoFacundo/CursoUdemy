import React, {useState, useEffect} from 'react'

const Primera1 = () => {
    const [animal, setAnimal] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        fetch("http://localhost:3001/api/animales")
        .then((response) => response.json())
        .then((animales) => {setAnimal(animales)})
    
        
},[])
console.log(animal);

    const handleRemove = (indexDelete) => {
        console.log(indexDelete);
        const newNames = animal.filter((element, index) => index !== indexDelete);
        console.log([newNames]);
        setAnimal(newNames);
        
        function eliminar() {
            useEffect(() =>{
                fetch("http://localhost:3001/api/animales/"+`${indexDelete}`), {method: 'DELETE'}
                .then(() => setAnimal('eliminado'))
                
            
                
        },[])
        }
        eliminar()
        
    }
    

  return (
    <div>
        <h1>primera pagina</h1>
            <ul>
                {animal?.map((data, index) => (  
                    <div>
                        <li key={index}>{data?.nombre}</li>
                        <button onClick={()=>handleRemove(index)}>x</button>
                    </div>
                ))}
            </ul>
    </div>
  )
}

export default Primera1