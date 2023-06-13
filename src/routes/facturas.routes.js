import { Router } from "express";

import { obtenerFacturas } from "../controllers/facturas.controller.js";

const router = Router();
//API facturas
router.get("/pedidos/facturas/:id", obtenerFacturas);

export default router;