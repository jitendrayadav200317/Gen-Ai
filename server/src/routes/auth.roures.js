import express from "express";
import { register, login, logout } from "../controllers/auth.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

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

/**
 * @route GET /api/auth/logout
 * @description cleat tolen from user cookie and the token in blacklist
 * @access public
 */
authRouter.get("/logout", logout);

/***
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authMiddleware);
export default authRouter;
