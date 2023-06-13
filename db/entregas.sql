CREATE TABLE entregas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  consecutivo INT,
  linea_id INT,
  guia_transporte_id INT,
  fecha_entrega DATE,
  estado VARCHAR(50),
  detalles VARCHAR(255) DEFAULT NULL,
  FOREIGN KEY (linea_id) REFERENCES lineas_pedido(id),
  FOREIGN KEY (guia_transporte_id) REFERENCES guias_transporte(id)
);

--trigger para el consecutivo autoincremental cada que se inserta nuevo registro
DELIMITER //
CREATE TRIGGER trg_entregas_insert
BEFORE INSERT ON entregas
FOR EACH ROW
BEGIN
  DECLARE last_consecutivo INT;
  SET last_consecutivo = (SELECT MAX(consecutivo) FROM entregas);
  IF last_consecutivo IS NULL THEN
    SET NEW.consecutivo = 1;
  ELSE
    SET NEW.consecutivo = last_consecutivo + 1;
  END IF;
END //