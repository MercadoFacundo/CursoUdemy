//Importar archivo Persona.jsx
import Persona from "./Persona";


const Personas = (props) => {
    const { onEditar, onEliminar, persons } = props;
    return (
        <ul>
            
            {/*mapea Base de datos */}
            {persons.map((persona, index) => (
                // Armar lista con una llave
                <li key={index}>
                    {/* Traigo al componente persona para mostrarla
                    donde vienen la persona y los botones */}
                    <Persona
                        persona={persona}
                        onEditar={onEditar}
                        onEliminar={onEliminar}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Personas;