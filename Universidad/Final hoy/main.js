import express from "express";
import { db } from "./db.js";
import { alumnosRouter } from "./routers/alumno.router.js";

const app = express();
app.use(express.json());

app.use("/alumnos", alumnosRouter);

app.get("/", (req, res) => {
    res.send("API de alumnos");
  });

app.listen(4000, async () => {
    try {
      await db.authenticate();
      console.log("Conexion a base de datos exitosa");
    } catch (error) {
      console.error("No se pudo conectar a la base de datos:", error);
    }
    console.log("API en funcionamiento");
  });