import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import { sequelize } from "../database/database.js";
import { SeccionCotizar } from "./SeccionCotizar.js";

export const TiposDePlanes = sequelize.define(
  "tipos_de_planes",
  {
    id_plan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_del_plan: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

