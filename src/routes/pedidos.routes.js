import { Router } from "express";

import {
  obtenerUltimosPedidos,
  obtenerPedido,
  crearPedido,
  eliminarPedido,
} from "../controllers/pedidos.controller.js";

const router = Router();
//API ultimos 10 pedidos
router.get("/pedidos", obtenerUltimosPedidos);
//API obtener pedido en especifico por consecutivo
router.get("/pedidos/:consecutivo", obtenerPedido);
//API para crear pedido
router.post("/pedidos", crearPedido);
//API elimar pedido por ID
router.delete("/pedidos/:id", eliminarPedido);

export default router;
