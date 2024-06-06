import express from "express";
import cors from "cors"; // Importar cors
import cotizacionRoutes from "./routes/cotizacion.routes.js";
import cpRoutes from "./routes/cp.routes.js";
import planesRoutes from "./routes/planes.routes.js";
import clientRoutes from "./routes/clients.routes.js";

const app = express();

// Configurar CORS
const corsOptions = {
  origin: "http://localhost:3001", // Permitir solicitudes desde este origen
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Usar cors con opciones

// Middlewares
app.use(express.json());

app.use(cotizacionRoutes);
app.use(cpRoutes);
app.use(planesRoutes);
app.use(clientRoutes);

export default app;
