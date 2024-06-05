import { Router } from "express";
import { getCotizaciones, getOneCotizacion, createCotizacion } from "../controllers/cotizacion.controller.js";

const router = Router();

router.get('/cotizacion', getCotizaciones);
router.get("/cotizacion/:id", getOneCotizacion);
router.post("/cotizacion", createCotizacion);
router.put("/cotizacion/:id");
router.delete("/cotizacion?:id");




export default router