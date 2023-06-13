CREATE TABLE lineas_pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  destino VARCHAR(100),
  producto_sku VARCHAR(50),
  cantidad INT,
  fecha_despacho DATE,
  tipo_pedido ENUM('MTO', 'MTS'),
  estado ENUM('RESERVADA', 'EN PRODUCCION', 'PENDIENTE'),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id)
);








