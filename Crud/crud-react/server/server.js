import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const db = new sqlite3.Database('../Personas.db'); // base de datos SQLite

app.use(cors());
app.use(express.json());


// Obtener todas las personas
//define una ruta de tipo GET en el servidor Express. En este caso, la ruta es /persona. Cuando el servidor reciba una solicitud HTTP GET a /persona, ejecutará la función proporcionada.
app.get('/persona', (req, res) => {
//db.all() es un método del objeto db que se refiere a una instancia de una base de datos SQLite.
  db.all('SELECT * FROM persona', [], (err, rows) => {
    if (err) {
// Responder al cliente con el error
      return res.status(500).json({ error: err.message });
    }
// Si no hay error, responder con las filas obtenidas
    res.json(rows);
  });
});

// Agregar una persona
app.post('/persona', (req, res) => {
//Extracción de datos del cuerpo de la solicitud 
  const { name, surname, age } = req.body;
//Preparación de la sentencia SQL
  const stmt = db.prepare('INSERT INTO persona (name, surname, age) VALUES (?, ?, ?)');
//Ejecución de la sentencia SQL
  stmt.run(name, surname, age, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
//Finalización de la sentencia preparada
  stmt.finalize();
});

// Actualizar una persona
app.put('/persona/:id', (req, res) => {
//Extracción de datos de la solicitud (req.body y req.params):
  const { name, surname, age } = req.body;
//Se extrae el id de la URL a través de req.params.id. Este id indica cuál de las personas almacenadas en la base de datos se debe actualizar.
  const { id } = req.params;
  const stmt = db.prepare('UPDATE persona SET name = ?, surname = ?, age = ? WHERE id = ?');
  stmt.run(name, surname, age, id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id });
  });
  stmt.finalize();
});

// Borrar una persona
app.delete('/persona/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('DELETE FROM persona WHERE id = ?');
  stmt.run(id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id });
  });
  stmt.finalize();
});

// Iniciar el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

