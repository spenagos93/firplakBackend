import { Router } from "express";

import { obtenerLineasPedidos } from "../controllers/lineas_pedido.controller.js";

const router = Router();
//API lineas de pedido
router.get("/pedidos/lineas/:id", obtenerLineasPedidos);

export default router;