import React,{useState} from 'react'

export const Ejercicio_2 = () => {
    let animales = ['jirafa', 'leon', 'perro']
    const [animal, setAnimal] = useState(animales)
    const [valor, setValor] = useState()



    const handlerAgregar = () => {
        console.log('clg1', animal);
        console.log('clg2', valor);
        setAnimal([...animal, valor])
        // if (animal.includes(valor)){
        //     alert('Ya existe')
        //     console.log('ya existe');
        // }else{
        //     setAnimal([...animal, valor])
        // }
        console.log('clg1', animal);
        }
    
    const handleRemove = (indexDelete) => {
        console.log(indexDelete);
        const newNames = animal.filter((element, index) => index !== indexDelete);
        console.log([newNames]);
        setAnimal(newNames);
    }




return (

    <div>Ejercicio_2

        <input onChange={(e) => setValor(e.target.value)} value={valor} placeholder='ingrese un animal'></input>
        <button onClick={handlerAgregar}>agregar</button>
        {
            
            animales.map((anim, index) => {
                return (
                    <div>
                        <li key={index}>{anim}</li>
                        <button onClick={()=>handleRemove(index)}>x</button>
                    </div>
                )
            }
            ) 
        }

    </div>

    
)
    }
