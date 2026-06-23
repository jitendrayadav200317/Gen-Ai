import express from "express";
import { register, login } from "../controllers/auth.controllers.js";

const authRouter = express.Router();
/**
 * @route POST/api /auth/register
 * @description register a  new user
 * @access public
 */
authRouter.post("/register", register);

/**
 * @route POST /api /auth /register
 * @description login user with email and password
 * @access public
 */
authRouter.post("/login", login);

export default authRouter;
