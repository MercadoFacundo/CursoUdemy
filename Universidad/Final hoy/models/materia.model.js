import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const Materia = db.define(
  "Materia",
  {
    id: {
      field: "idMateria",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", type: DataTypes.STRING(50) },
  },
  { tableName: "Materias", timestamps: false }
);
