//endpoints para la tabla pedidos
import pool from "../db.js";

//traer últimos 10 pedidos de la tabla
export const obtenerLineasPedidos = async (request, response) => {
  try {
    const { id } = request.params;

    const [result] = await pool.query(
      "SELECT * FROM lineas_pedido WHERE pedido_id = ?",
      [id]
    );

    if (result.length <= 0) {
      return response.status(404).json({
        message: "No hay líneas de pedidos para mostrar",
      });
    }

    response.json(result);
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};
