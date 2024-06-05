import { Cp } from "./Cp.js";
import { TiposDePlanes } from "./TiposPlanes.js";
import { SeccionCotizar } from "./SeccionCotizar.js";

export const setupAssociations = () => {
  // Usar un alias para la asociación con CP
  SeccionCotizar.belongsTo(Cp, { foreignKey: "cp", as: "cp_details" });
  Cp.hasOne(SeccionCotizar, { foreignKey: "cp", as: "cp_details" });

  // Usar un alias para la asociación con TiposDePlanes
  SeccionCotizar.belongsTo(TiposDePlanes, {
    foreignKey: "tipo_de_plan",
    targetKey: "id_plan",
    as: "plan_details",
  });

  TiposDePlanes.hasOne(SeccionCotizar, {
    foreignKey: "tipo_de_plan",
    sourceKey: "id_plan",
    as: "plan_details",
  });
  
};
