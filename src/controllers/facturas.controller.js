//endpoints para la tabla pedidos
import pool from "../db.js";

//traer últimos 10 pedidos de la tabla
export const obtenerFacturas = async (request, response) => {
  try {
    const { id } = request.params;

    const [result] = await pool.query(
      "SELECT * FROM facturas WHERE pedido_id = ?",
      [id]
    );

    if (result.length <= 0) {
      return response.status(404).json({
        message: "No hay facturas para mostrar",
      });
    }

    response.json(result);
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};