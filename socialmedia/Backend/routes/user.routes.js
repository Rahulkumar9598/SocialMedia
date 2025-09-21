import { Router } from "express";
import { handleUserRegister } from "../controller/user.controller.js";

const userRoutes = Router()


userRoutes.post("/register" , handleUserRegister)

export default userRoutes