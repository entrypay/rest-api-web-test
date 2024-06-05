import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { SeccionCotizar } from "./SeccionCotizar.js";

export const Cp = sequelize.define(
  "cp",
  {
    d_codigo: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    d_asenta: {
      type: DataTypes.STRING(100),
    },
    d_tipo_asenta: {
      type: DataTypes.STRING(50),
    },
    d_mnpio: {
      type: DataTypes.STRING(100),
    },
    d_estado: {
      type: DataTypes.STRING(100),
    },
    d_ciudad: {
      type: DataTypes.STRING(100),
    },
    d_cp: {
      type: DataTypes.STRING(10),
    },
    c_estado: {
      type: DataTypes.STRING(10),
    },
    c_oficina: {
      type: DataTypes.STRING(10),
    },
    c_cp: {
      type: DataTypes.STRING(10),
    },
    c_tipo_asenta: {
      type: DataTypes.STRING(50),
    },
    c_mnpio: {
      type: DataTypes.STRING(100),
    },
    id_asenta_cpcons: {
      type: DataTypes.STRING(10),
    },
    d_zona: {
      type: DataTypes.STRING(50),
    },
    c_cve_ciudad: {
      type: DataTypes.STRING(10),
    },
  },
  {
    timestamps: false,
  }
);
