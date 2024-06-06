import express from "express";
import {
  getClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient,
  findClientByPhoneOrEmail
} from "../controllers/clients.controller.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/clients/:id", getOneClient);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);
router.post("/clients/find", findClientByPhoneOrEmail); // Ruta para buscar cliente

export default router;
