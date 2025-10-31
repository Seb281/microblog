import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersController from "./controllers/userController.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", usersController.get);
app.post("/", usersController.post);
app.listen(PORT, () => {
  console.log(`🥦 Server is legendary on http://localhost:${PORT}`);
});
