import React,{Component} from "react";

class PrimerComponente extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        
        return (  
        <>
        <h1>Hola mundo desde primer componente{this.props.nombre}</h1>
        </>
        );
        
    }
}
 
export default PrimerComponente;