import { useEffect, useState } from "react";
import FormularioPersona from "./components/FormularioPersona";
import Personas from "./components/Personas";


function App() {

//utilizando el metodo GET, renderizamos o leemos  atravez del useefect
  const [persons, setPersons] = useState([])
  const handleGetPersons = async () => {
    try {
      await fetch("http://localhost:3000/persons").then((res) => {
        res.json().then((getPersons) => {
          setPersons([...getPersons]);
        });
      });
    } catch (error) {
      console.log("error")
    }
  };

// utilizamos el metodo POST para crear  una nueva persona
  const handleRegisterPerson = async (values) => {
    try {
      const res = await fetch("http://localhost:3000/persons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: values.nombre,
          apellido: values.apellido,
          edad: values.edad
        })
      })
      if (res.ok) {

        //Renderiza y limpia los nombres de los campos
        handleGetPersons();
        setPersonaElegida(initialState);
      }
    } catch (error) {
      console.error(error)
    }
  }

//eliminamos usando el id para evitar conflictos con el metodo DELETE
  const handleDeletePerson = async (id) => {
    try {
      await fetch(`http://localhost:3000/persons/${id}`, {
        method: "DELETE",
      })
      handleGetPersons();
    } catch (error) {
      console.error(error)
    }
  }

// Actualizamos al contacto por el metodo PUT
  const handleUpdatePerson = async (values) => {
    const res = await fetch("http://localhost:3000/persons/" + values.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: values.nombre,
        apellido: values.apellido,
        edad: values.edad
      }),
    });
    if (res.ok) {
      handleGetPersons();
    }
  };

  //nos permite engancharnos del ciclo de vida de un componente 
  useEffect(() => {
    handleGetPersons()
  }, [])

//constante para limpiar
  const initialState = {
    nombre: "",
    apellido: "",
    edad: 0,
  };

  const [personaElegida, setPersonaElegida] = useState(initialState);
  const [modoAgregar, setModoAgregar] = useState(true);
// despues de editar una persona, renderizo y limpio los imputs
  const editarPersona = (personaEditada) => {
    //actualiza
    handleUpdatePerson(personaEditada)
    //limpia
    setPersonaElegida(initialState);
    setModoAgregar(true);
  };
//Una vez eliminado se Renderiza
  const eliminarPersona = (personaId) => {
    if (window.confirm("¿Desea eliminar la persona?")) {
      handleDeletePerson(personaId) 
    }
  };

  return (
    <>
    <h1>Formulario</h1>
    {/* muestra componennte FormularioPersona, imputs y botones */}
      <FormularioPersona
        handleSubmit={handleRegisterPerson}
        persona={personaElegida}
        modoAgregar={modoAgregar}
        onEditar={editarPersona}
        onCancelar={() => {
          setPersonaElegida(initialState);
          setModoAgregar(true);
        }}
      />
      {/* Se muestra el componente Personas lista */}
      <Personas
        persons={persons}
        onEditar={(persona) => {
          setPersonaElegida(persona);
          setModoAgregar(false);
        }}
        onEliminar={eliminarPersona}
      />
    </>
  );
}

export default App;