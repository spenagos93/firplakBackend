//endpoints para la tabla pedidos
import pool from "../db.js";

//traer últimos 10 pedidos de la tabla
export const obtenerUltimosPedidos = async (request, response) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM pedidos ORDER BY pedido_id DESC LIMIT 10"
    );
    if (result.length <= 0) {
      return response.status(404).json({
        message: "No hay pedidos para mostrar",
      });
    }
    response.json(result);
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};

//obtener pedido en especifico por consecutivo
export const obtenerPedido = async (request, response) => {
  try {
    const { consecutivo } = request.params;
    const sql = "SELECT * FROM pedidos WHERE consecutivo = ? LIMIT 1";
    const [result] = await pool.query(sql, [consecutivo]);
    if (result.length <= 0) {
      return response.status(404).json({
        message: "No se encontró pedido",
      });
    }
    response.json(result);
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};

//crear pedido en la tabla
export const crearPedido = async (request, response) => {
  try {
    const { estado_pedido, cliente } = request.body;

    // Validar campos requeridos
    if (!estado_pedido || !cliente) {
      return response.status(400).json({
        message: "El estado del pedido y el cliente son campos requeridos.",
      });
    }

    // Validar tipos de datos
    if (typeof estado_pedido !== "string" || typeof cliente !== "string") {
      return response.status(400).json({
        message:
          "El estado del pedido y el cliente deben ser cadenas de texto.",
      });
    }

    const sql = "INSERT INTO pedidos (estado_pedido, cliente) VALUES (?, ?)";
    const [result] = await pool.query(sql, [estado_pedido, cliente]);

    response.json({
      message: "Pedido creado correctamente",
      id: result.insertId,
      estado_pedido,
      cliente,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};

//Elimanr pedido de la tabla por ID
export const eliminarPedido = async (request, response) => {
  try {
    const { id } = request.params;
    const sql = "DELETE FROM pedidos WHERE pedido_id = ?";
    const [result] = await pool.query(sql, [id]);

    if (result.affectedRows > 0) {
      response.json({ message: "Pedido eliminado correctamente" });
    } else {
      response
        .status(404)
        .json({ error: `Pedido con el ID ${id} no encontrado` });
    }
  } catch (error) {
    return response.status(500).json({
      message: "Algo no va bien en el servidor",
    });
  }
};
