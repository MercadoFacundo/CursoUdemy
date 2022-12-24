import { useState } from "react"

export function Contador() {
    const [ contador, setContador ] = useState(5)

    return <div>
            <h2>Ejercicio 1</h2>
            <h3>Contador: {contador}</h3>
            <button disabled={contador === 10} onClick={() => {setContador(contador + 1)}}>sumar</button>
            <button disabled={contador === 0} onClick={() => {setContador(contador - 1)}}>restar</button>
            <button onClick={() => {setContador(5)}}>reiniciar</button>
    </div>
}