import axios from "axios"
import React, { useEffect, useState } from 'react'

function CallApi() {
    //users donde traeremos los usuarios
    const [users, setUsers] = useState([]) 
    // 2)- get user hace la peticion
    const getUsers = async () => {
        //utilizamos axios para hacer un get a la api 
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        //seteamos la data del response donde se trae la info
        console.log(response);
        setUsers(response.data)
    }
    //Se ejecuta solo una vez gracias a los corchetes
    //1) -llama a get user
    useEffect(() => {
        getUsers()
    },[])
    //Esta variable va a mapear los usuarios de la api y retornara
    //el nombre de los usuarios como se indica user.name
    const HTMLUsers = users.map((user) => {
        return (
            <div key={user.id}>
                <h3>{user.name}</h3>
            </div>
        )
    })
    return (
    <div>
    <h1>axios \ Llamada a una API</h1>
    <section>{HTMLUsers}</section>
    </div>  
  )
}

export default CallApi