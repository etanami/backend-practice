import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("It's working...")
})


export default app;