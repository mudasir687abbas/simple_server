import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

import mysql from "mysql2/promise";
let db;
try {
    db = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12814377",
      password: "lvNrIK6F93",
      database: "sql12814377",
      port: 3306,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed",error.message);
    db = null;
  }

app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/user", (req, res) => {
  res.json({name:'Mudasir Abbas');
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
