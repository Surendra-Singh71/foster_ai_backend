import express from "express";
import { addTrainer, getTrainers } from "../controllers/trainerController.js";

const router = express.Router();

// Trainer Routes
router.get("/trainers", getTrainers);
router.post("/trainer", addTrainer);

export default router;
