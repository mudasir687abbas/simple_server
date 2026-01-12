import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://crude-mern-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.get("/", (req, res) => {
  res.send("API running");
});

export default app;
