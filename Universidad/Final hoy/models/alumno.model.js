import { db } from "../db.js";
import { DataTypes } from "sequelize";


export const Alumno = db.define(
  "Alumno",
  {
    id: {
      field: "idAlumno",
      type: DataTypes.INTEGER,
      NotNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", NotNull: true,type: DataTypes.STRING(50) },
    apellido: { field: "apellido", NotNull: true, type: DataTypes.STRING(50) },    
  },
  { tableName: "Alumnos", timestamps: false }
);
