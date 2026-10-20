import { Router } from "express";
import { getAllUsers } from "../controler/userControler.js";

const userRouter = Router();

userRouter.route("/").get(getAllUsers);

export default userRouter;