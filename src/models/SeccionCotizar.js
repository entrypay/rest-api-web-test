import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const SeccionCotizar = sequelize.define(
  "seccion_cotizar",
  {
    id_prospecto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.TEXT,
    },
    apellidos: {
      type: DataTypes.TEXT,
    },
    numero_telefonico: {
      type: DataTypes.NUMERIC(10),
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
    },
    fifa: {
      type: DataTypes.STRING(10),
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    numero_usuarios: {
      type: DataTypes.NUMERIC(10),
    },
    cp: {
      type: DataTypes.STRING(10),
    },
    tipo_de_plan: {
      type: DataTypes.INTEGER, // Cambiado a INTEGER para que coincida con id_plan
    },
  },
  {
    timestamps: false,
  }
);
