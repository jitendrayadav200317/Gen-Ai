// import app from "./src/app.js";
import dotenv from "dotenv";
import dbconnect from "./src/config/database.js";

import express from "express";
import authRouter from "./src/routes/auth.roures.js";
dbconnect();

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("server is runnig port 3000");
});
