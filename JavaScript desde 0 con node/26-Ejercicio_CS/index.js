//Traemos el paquete axios
const axios = require('axios');
//para que este paquete funcione correctamente hayq ue agregar .promises
const fs = require('fs').promises;
//
const path = require('path');

//main es el que vamos a ejecutar cada vez que llamemos a index.js
//axios es un paquete asincrono
//Etamo haciendo una peticion con GET con axios
const main = async () => {
    //Llamado a la api
    let response = await axios.get('https://rickandmortyapi.com/api/character')
    //traemos los resultados
    let {
        data: {results},
    } = response;
    //traemos los personajes
    let personajes = results.map((personaje) => {
        return {
            id: personaje.id,
            name: personaje.name,
            status: personaje.status,
            species: personaje.species
        };
    
    // Vamos a odear los archivos cn una coma
    }).map((personaje) => Object.values(personaje).join(",")) 
    //Este va a dar un salto de linea para que el archivo csv sea legible
    .join('\n')
    //Agregamos los titulos de la tabla
    const titulos = "id,name,status,species\n"
    const titulosPersonajes = titulos + personajes
    //vamos a generar un archivo con fs
    //el primer parametro es donde vamos a escribir el archivo
    //en el segundo son los datos que va a contener el archivo
    await fs.writeFile(path.join(__dirname, 'data.csv'), titulosPersonajes);

    console.log(__dirname); //nos devuelve la ubicacion donde estamos
    console.log(path.join(__dirname, 'data.csv'));//path nos junta la ubicacion con lo quele agreguemos
    console.log(titulosPersonajes);
}

main();