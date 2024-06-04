CREATE TABLE seccion_cotizar (
    nombres TEXT,
    apellidos TEXT,
    numero_telefonico NUMERIC(10),
    correo_electronico VARCHAR(100),
    fifa VARCHAR(10),
    tipo_de_plan NUMERIC(1),
    status BOOLEAN,
    numero_usuarios NUMERIC(10),
    cp VARCHAR(10),
    id_prospecto NUMERIC(4)
);


select *from seccion_cotizar;

INSERT INTO seccion_cotizar (nombres, apellidos, numero_telefonico, correo_electronico, fifa, tipo_de_plan, status, numero_usuarios, cp, id_prospecto)
VALUES 
('Juan', 'Pérez', 1234567890, 'juan.perez@example.com', 'ABCD1234', 1, TRUE, 50, '12345', 1001);

-- ('María', 'Gómez', 2345678901, 'maria.gomez@example.com', 'EFGH5678', 2, FALSE, 20, '67890', 1002),
-- ('Luis', 'Martínez', 3456789012, 'luis.martinez@example.com', 'IJKL9012', 3, TRUE, 30, '11223', 1003)