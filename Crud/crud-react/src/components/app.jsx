import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Aplicacion() {
    const [people, setPeople] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '', surname: '', age: '' });
    const [editPerson, setEditPerson] = useState(null);
//En este caso, se llama a fetchPeople para cargar la lista de personas desde el backend cuando el componente se renderiza por primera vez.
    useEffect(() => {
    fetchPeople();
    }, []);
//La consulta en el backend se ejecuta en el momento en que el frontend hace una solicitud HTTP al servidor (backend) para realizar una acción (por ejemplo, agregar, actualizar, eliminar o leer datos)
    const fetchPeople = async () => {
    try {
        const response = await axios.get('http://localhost:5000/persona');
        setPeople(response.data);
    } catch (error) {
        console.error('Error al buscar en la tabla personas: ', error);
    }
};

    const addPerson = async () => {
    try {
        await axios.post('http://localhost:5000/persona', newPerson);
        fetchPeople();
        setNewPerson({ name: '', surname: '', age: '' });
    } catch (error) {
        console.error('Error al agregar una persona: ', error);
    }
    };

    const updatePerson = async () => {
    try {
        await axios.put(`http://localhost:5000/persona/${editPerson.id}`, editPerson);
        fetchPeople();
        setEditPerson(null);
    } catch (error) {
        console.error('Error al actualizar una persona: ', error);
    }
};

    const deletePerson = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/persona/${id}`);
        fetchPeople();
    } catch (error) {
        console.error('Error al intentar eliminar una persona: ', error);
    }
};

    return (
    <div>

        <h2>Agregar Persona</h2>
        <input
        type="text"
        placeholder="Nombre"
        value={newPerson.name}
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
        <button onClick={addPerson}>Agregar</button>

        {editPerson && (
    <div>
        <h2>Editar personas</h2>
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
            <button onClick={updatePerson}>Aceptar</button>
        </div>
        )}

        <h2>Lista de personas</h2>
        <ul>
        {people.map((person) => (
            <li key={person.id}>
            {person.name} {person.surname}, {person.age} años 
            <button onClick={() => setEditPerson(person)}>Editar</button>
            <button onClick={() => deletePerson(person.id)}>Borrar</button>
            </li>
        ))}
        </ul>
    </div>
);
}

export default Aplicacion;
