import { Router } from "express";
import { handleGetUserDetails, handleUserLogin, handleUserRegister } from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";

const userRoutes = Router()


userRoutes.post("/register" , handleUserRegister)
userRoutes.post("/login" , handleUserLogin)
userRoutes.get("/get-user-details" , auth , handleGetUserDetails)

export default userRoutes