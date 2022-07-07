import React,{Component} from "react";

class Estado extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        nombre: "Pedro",
        apellido: "alvarez",
        edad: 25
     }

    CambiarDatos(){
        if (this.state.nombre === "Pedro" && this.state.apellido === "alvarez"){
            this.setState({nombre: "facu", apellido:"mercado", edad:26})
        }else{
            this.setState({nombre: "Pedro", apellido:"alvarez", edad:26})

        }
        
    }

    render() { 
        return ( 
            <>
            <h2> mi nombre es {this.state.nombre} {this.state.apellido} y tengo {this.state.edad}</h2>
{/* Para poder cambiar un estado si o si necesito
 añadirle .bind(this) "Bindear, tener un acceso a un 
 objeto"             */}
            <button onClick={this.CambiarDatos.bind(this)}>Cambiar</button>
            </>
         );
    }
}
 
export default Estado;