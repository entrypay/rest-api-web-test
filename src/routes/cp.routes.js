import { Router } from "express";
import {
  getCps,
  getOneCp,
  createCp,
  updateCp,
  deleteCp,
} from "../controllers/cp.controller.js";

const router = Router();

router.get("/cp", getCps);
router.get("/cp/:id", getOneCp);
router.post("/cp", createCp);
router.put("/cp/:id", updateCp);
router.delete("/cp/:id", deleteCp);

export default router;
