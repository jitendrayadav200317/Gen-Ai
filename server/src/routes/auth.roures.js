import express from "express";
import authController from "../controllers/auth.controllers.js";
const authRouter = express.Router();
authRouter.post("/register");

export default authRouter;
