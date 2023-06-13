import express from "express";
import pedidos from "./routes/pedidos.routes.js";
import cors from "cors";
import "./config.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", pedidos);

app.use((request, response, next) => {
  response.status(404).json({
    message: "endpoint no encontrado",
  });
});

export default app;
