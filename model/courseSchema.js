import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_image: {
      type: String, // Store the image path or URL
      required: false,
    },
    course_description: {
      type: String,
      required: true,
    },
    course_duration: {
      type: Number, // Storing duration as days or hours
      required: true,
    },
    course_trainer: {
      type: mongoose.Schema.Types.ObjectId, // Foreign key to Trainer model
      ref: "Trainer",
      required: true,
    },
    course_price: {
      type: Number, // Use float for price
      required: false,
    },
    course_start_date: {
      type: Date,
      required: true,
    },
    course_category: {
      type: String,
      required: true,
    },
    course_status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
