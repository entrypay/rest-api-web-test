import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Clients.js";
import "./models/Cp.js";
import "./models/SeccionCotizar.js";
import "./models/TiposPlanes.js";
import { setupAssociations } from "./models/associations.js";

// Configurar las asociaciones
setupAssociations();

async function main() {
  try {
    // Sincronizar los modelos con la base de datos
    await sequelize.sync({ force: true });
    // Iniciar el servidor
    app.listen(3000, () => {
      console.log("Servidor en puerto", 3000);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
