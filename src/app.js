// app.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const quoteRoutes = require("./routes/seccionQuote.routes.js");
const cpRoutes = require("./routes/cp.routes.js");
const versionRoutes = require("./routes/version.routes.js");

// Inicializa el dotenv para usar variables de entorno
dotenv.config();

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Define las rutas de la aplicación
app.use("/api/quote", quoteRoutes);
app.use("/api/cp", cpRoutes);
app.use("/api/version", versionRoutes);

module.exports = app;
