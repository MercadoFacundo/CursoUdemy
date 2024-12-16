import React, { useState } from 'react';

function Formulario() {
    // Estado para almacenar las personas
    const [people, setPeople] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '', surname: '', age: '' });
    const [editPerson, setEditPerson] = useState(null);

    // Función para agregar una nueva persona
    const addPerson = () => {
        if (!newPerson.name || !newPerson.surname || !newPerson.age) {
            alert("Por favor, llena todos los campos.");
            return;
        }
        
        // Agregar una nueva persona al estado (simulando la inserción en la base de datos)
        setPeople([
//El operador spread toma todos los elementos dentro del arreglo people y los coloca en el nuevo arreglo.
            ...people,
//Este es un nuevo objeto que se agrega al final del arreglo copiado.
            { id: people.length + 1, ...newPerson }  // Asignamos un ID simulado
        ]);
        // Limpiar los campos después de agregar
        setNewPerson({ name: '', surname: '', age: '' }); 
    };

    // Función para actualizar una persona
    const updatePerson = () => {
        if (!editPerson) return;

        setPeople(people.map(person => 
/*Para cada person en el arreglo, se verifica si el id de esa persona es igual al id de la persona que se está editando (editPerson.id).
Si el id coincide, se reemplaza esa persona con los nuevos datos de editPerson (esto es lo que actualiza la persona). Si no coincide, la persona se mantiene igual. */
            person.id === editPerson.id ? editPerson : person
        ));

        setEditPerson(null);  // Limpiar estado de la persona que estaba siendo editada
    };

    // Función para eliminar una persona
    const deletePerson = (id) => {
        setPeople(people.filter(person => person.id !== id));
    };

    return (
        <div>
            <h2>Agregar Nueva Persona</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={newPerson.name}
//(...newPerson) para copiar todas las propiedades actuales de newPerson, y luego reemplaza la propiedad name con el nuevo valor ingresado por el usuario.
                onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={newPerson.surname}
                onChange={(e) => setNewPerson({ ...newPerson, surname: e.target.value })}
            />
            <input
                type="number"
                placeholder="Edad"
                value={newPerson.age}
                onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
            />
            <button onClick={addPerson}>Agregar Persona</button>

            {editPerson && (
                <div>
                    <h2>Editar Persona</h2>
                    <input
                        type="text"
                        value={editPerson.name}
                        onChange={(e) => setEditPerson({ ...editPerson, name: e.target.value })}
                    />
                    <input
                        type="text"
                        value={editPerson.surname}
                        onChange={(e) => setEditPerson({ ...editPerson, surname: e.target.value })}
                    />
                    <input
                        type="number"
                        value={editPerson.age}
                        onChange={(e) => setEditPerson({ ...editPerson, age: e.target.value })}
                    />
                    <button onClick={updatePerson}>Actualizar Persona</button>
                </div>
            )}

            <h2>Lista de Personas</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}> {person.name} {person.surname}, {person.age} años
                        <button onClick={() => setEditPerson(person)}>Editar</button>
                        <button onClick={() => deletePerson(person.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Formulario;
