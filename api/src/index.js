import { PORT } from "./configs.js";
import express from "express";
import morgan from "morgan";
import { orderRoutes } from "./routes/index.js";
import basicAuth from "./middlewares/basic.auth.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", basicAuth, orderRoutes);

// Error
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log("Start server in port ", PORT);
});
