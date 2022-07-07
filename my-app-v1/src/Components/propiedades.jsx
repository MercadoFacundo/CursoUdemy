import React,{Component} from "react";

class Propiedades extends Component {
    constructor(props) {
        super(props);
    }    
    state = {  }
    render() { 
        return ( 
        <>
            
        <h1>Ella se llama {this.props.Nombre}</h1>
            
        
            
        </>
        );
    }
}
 
export default Propiedades;
