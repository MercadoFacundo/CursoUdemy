function Hijo(props) {
  return (
  <>
        <h2>Este es el componente Hijo</h2>
        <p>{props.mensaje} - {props.varia}</p>
        <p>{props.objeto.nombre}</p>
  </>

    )
}

export default Hijo;