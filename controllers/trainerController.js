import Trainer from "../model/trainerSchema.js";

// Get all trainers
export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json({ trainers });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trainers", error });
  }
};

// Add a new trainer
export const addTrainer = async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    const savedTrainer = await newTrainer.save();
    res
      .status(201)
      .json({ message: "Trainer added successfully", trainer: savedTrainer });
  } catch (error) {
    res.status(500).json({ message: "Failed to add trainer", error });
  }
};
