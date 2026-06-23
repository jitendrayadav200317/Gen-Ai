import app from "./src/app.js";
import dotenv from "dotenv";
import dbconnect from "./src/config/database.js";

dotenv.config();
dbconnect();

app.listen(3000, () => {
  console.log("server is runnig port 3000");
});
