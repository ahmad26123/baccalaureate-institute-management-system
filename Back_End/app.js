import express from "express";
import cors from "cors";

import authRouter from "./routers/authRoutes.js";
import userRouter from "./routers/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my Application");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);

export default app;