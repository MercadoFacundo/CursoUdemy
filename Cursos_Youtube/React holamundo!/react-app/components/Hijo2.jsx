import { useEffect } from "react"

function Hijo2() {
    useEffect(()=>{
        console.log("hijo 2 se a renderizado");
    })
  return (
    <div className="Hijo2">
        <h2>Este es un componente hijo</h2>
    </div>
  )
}

export default Hijo2