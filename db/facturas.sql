CREATE TABLE facturas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  consecutivo VARCHAR(100),
  pedido_id INT,
  guia_transporte_id INT,
  tipo_envio ENUM('FISICO','ELECTRONICO'),
  pod_factura VARCHAR(255),
  requiere_trazabilidad BOOLEAN,
  estado ENUM('ENVIADA','RADICADA'),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
  FOREIGN KEY (guia_transporte_id) REFERENCES guias_transporte(id)
);