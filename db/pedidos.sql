--sentencia para crear la tabla pedidos
CREATE TABLE pedidos (
  pedido_id INT AUTO_INCREMENT PRIMARY KEY,
  consecutivo INT NOT NULL,
  fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado_pedido VARCHAR(50),
  cliente VARCHAR(100)
);
--trigger para el consecutivo autoincremental cada que se inserta nuevo registro
DELIMITER //
CREATE TRIGGER trg_pedidos_insert
BEFORE INSERT ON pedidos
FOR EACH ROW
BEGIN
  DECLARE last_consecutivo INT;
  SET last_consecutivo = (SELECT MAX(consecutivo) FROM pedidos);
  IF last_consecutivo IS NULL THEN
    SET NEW.consecutivo = 1;
  ELSE
    SET NEW.consecutivo = last_consecutivo + 1;
  END IF;
END //

--sentencia para insertar pedidos inventados
INSERT INTO pedidos (estado_pedido, cliente)
VALUES
  ('pendiente', 'Cliente 1'),
  ('completado', 'Cliente 2'),
  ('parcialmente despachado', 'Cliente 3'),
  ('pendiente', 'Cliente 4'),
  ('completado', 'Cliente 5');

--sentencia para seleccionar todos los pedidos
SELECT *
FROM pedidos;