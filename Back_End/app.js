<<<<<<< HEAD
import express from "express";
import cors from "cors";

import authRouter from "./routers/authRoutes.js";
import userRouter from "./routers/userRoutes.js";
=======

import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
>>>>>>> 941a982fa0e00a5ea4d70398cdec3d85d7e0a9fe

import {
    notFound,
    errorHandler
} from './Middleware/Middleware.js';

const app = express();

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("Welcome to my Application");
});

app.use("/auth", authRouter);
=======
>>>>>>> 941a982fa0e00a5ea4d70398cdec3d85d7e0a9fe
app.use("/users", userRouter);

// // Temporary routes for testing error handling
// if (process.env.NODE_ENV !== "production") {
//     app.get("/test-error/500", (req, res, next) => {
//         next(new Error("Test internal server error"));
//     });

//     app.get("/test-error/401", (req, res, next) => {
//         const error = new Error("Unauthorized");
//         error.statusCode = 401;
//         next(error);
//     });

//     app.get("/test-error/403", (req, res, next) => {
//         const error = new Error("Forbidden");
//         error.statusCode = 403;
//         next(error);
//     });

//     app.get("/test-error/duplicate", (req, res, next) => {
//         const error = new Error("Duplicate test");
//         error.code = 11000;
//         error.keyValue = { email: "test@example.com" };
//         next(error);
//     });
// }

// Handle routes that do not exist
app.use(notFound);

// Handle all forwarded errors
app.use(errorHandler);

export default app;
