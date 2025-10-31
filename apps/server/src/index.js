import express from "express";
import dotenv from "dotenv";
import prisma from "./model.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`🥦 Server is legendary on http://localhost:${PORT}`);
});
