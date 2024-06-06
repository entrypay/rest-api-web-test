import express from "express";
import {
  getPlanes,
  getOnePlan,
  createPlan,
  updatePlan,
  deletePlan,
} from "../controllers/planes.controller.js";

const router = express.Router();

router.get("/planes", getPlanes);
router.get("/planes/:id", getOnePlan);
router.post("/planes", createPlan);
router.put("/planes/:id", updatePlan);
router.delete("/planes/:id", deletePlan);

export default router;
