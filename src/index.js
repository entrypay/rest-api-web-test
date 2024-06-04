const app = require("./app");

// Define el puerto a utilizar desde las variables de entorno o por defecto 3001
const PORT = process.env.PORT || 3001;

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Activo en el puerto ${PORT}`);
});
