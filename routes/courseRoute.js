// import express from 'express';
// import multer from 'multer';
// import { addCourse, getCourses } from '../controllers/courseController.js';

// const router = express.Router();

// // Multer setup for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/images/courseimages");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Course Routes
// router.get('/courses', getCourses);
// router.post('/course', upload.single('photo'), addCourse); // Use upload middleware here

// export default router;

import express from "express";
import multer from "multer";
import { addCourse, getCourses } from "../controllers/courseController.js";

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/courseimages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Course Routes
router.get("/courses", getCourses);
router.post("/course", upload.single("course_image"), addCourse); // Handle image upload

export default router;
