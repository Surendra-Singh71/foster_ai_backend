// import express from "express";
// const app = express();
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { connectDatabase } from "./config/connectDB.js";
// import errorMiddleware from "./middleware/errors.js";
// import traineeRoute from "./routes/authRoute.js";

// // Handle Uncaught exceptions
// process.on("uncaughtException", (err) => {
//   console.log(`ERROR: ${err}`);
//   console.log("Shutting down due to uncaught expection");
//   process.exit(1);
// });

// dotenv.config({ path: "./config/config.env" });

// // Connecting to database
// connectDatabase();

// app.use(
//   express.json()
// );
// app.use(cookieParser());

// app.get("/",(req,res)=>{
//     res.send("hell i am back");
// })

// app.use("/api",traineeRoute);

// // Using error middleware
// app.use(errorMiddleware);

// const server = app.listen(process.env.PORT, () => {
//   console.log(
//     `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
//   );
// });

// //Handle Unhandled Promise rejections
// process.on("unhandledRejection", (err) => {
//   console.log(`ERROR: ${err}`);
//   console.log("Shutting down server due to Unhandled Promise Rejection");
//   server.close(() => {
//     process.exit(1);
//   });
// });
/*
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDatabase } from "./config/connectDB.js";
import errorMiddleware from "./middleware/errors.js";
import traineeRoute from "./routes/authRoute.js";
import courseRoutes from './routes/courseRoute.js'; 
import { fileURLToPath } from 'url';

const app = express();


// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

// Connecting to database
connectDatabase();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, I am back!");
});

app.use("/api", traineeRoute);
app.use('/api', courseRoutes);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});

*/

import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDatabase } from "./config/connectDB.js";
import errorMiddleware from "./middleware/errors.js";
import traineeRoute from "./routes/authRoute.js";
import courseRoutes from "./routes/courseRoute.js";
import { fileURLToPath } from "url";

const app = express();

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

// Connecting to database
connectDatabase();

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, I am back!");
});

app.use("/api", traineeRoute);
app.use("/api", courseRoutes);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
