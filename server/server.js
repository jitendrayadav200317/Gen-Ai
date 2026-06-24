// import app from "./src/app.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";

import dbconnect from "./src/config/database.js";
import authRouter from "./src/routes/auth.roures.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
dbconnect();
dotenv.config();

app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("server is runnig port 3000");
});
