import express from "express";
import dotenv from "dotenv";

dotenv.config({});

const app = express();

console.log(process.env);

app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
