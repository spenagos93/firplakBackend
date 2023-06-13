CREATE TABLE guias_transporte (
  id INT AUTO_INCREMENT PRIMARY KEY,
  consecutivo INT,
  transportadora VARCHAR(100),
  pod_guia VARCHAR(255)
  );

  DELIMITER //
CREATE TRIGGER trg_guias_transporte_insert
BEFORE INSERT ON guias_transporte
FOR EACH ROW
BEGIN
  DECLARE last_consecutivo INT;
  SET last_consecutivo = (SELECT MAX(consecutivo) FROM guias_transporte);
  IF last_consecutivo IS NULL THEN
    SET NEW.consecutivo = 1;
  ELSE
    SET NEW.consecutivo = last_consecutivo + 1;
  END IF;
END //