import express from "express";
import { Alumno } from "../models/alumno.model.js";

export const alumnosRouter = express.Router();


alumnosRouter.get("/", async (req, res) => {
  const alumnos = await Alumno.findAll();
  res.send(alumnos);
});

alumnosRouter.get("/:id", async (req, res) => {
  const Alumno = await Alumno.findByPk(req.params.id);
  res.send(Alumno);
});

alumnosRouter.post("/", async (req, res) => {
  const nuevoAlumno = await Alumno.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  });
  res.send(nuevoAlumno);
});