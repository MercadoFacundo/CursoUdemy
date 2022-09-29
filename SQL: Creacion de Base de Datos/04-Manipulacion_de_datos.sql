CREATE DATABASE bodega 

USE bodega;

CREATE TABLE productos (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(28),
precio FLOAT,
provedor VARCHAR(28)
);

DESC productos;

SELECT * FROM productos;

-- INSERTAR DATOS EN UNA TABLA ----------------------------------------------------------------------
-- INSERT INTO nombre_tabla (columna1, columna2, columna3, ...)
-- VALUES (ejemplo1, ejemplo2, ejemplo3)
INSERT INTO productos (nombre, precio, provedor)
VALUES ('cafe', 3.99, 'LUCKY_LUCAS_CA')

SELECT * FROM productos;

INSERT INTO productos (nombre, precio, provedor)
VALUES ('harina de trigo', 1.75, 'horno_de_atenas'),
	   ('gaseosa', 1.50, 'YORGELIS_2007')

SELECT * FROM productos;

INSERT INTO productos (nombre, precio, provedor)
VALUES ('leche', 2.75, 'sancor'),
	   ('fanta', 2.50, 'YORGELIS_2007'),
	   ('pollo', 1.30, 'granja_los_pollos'),
	   ('atun', 2.00, 'pescaderia_alem');
SELECT * FROM productos;
-- ACTUALIZAR DATOS DE UNA TABLA ----------------------------------------------------------------------
-- UPDATE nombre_tabla
-- SET nombre_columna = nuevo_dato/'nombre'/numero
-- WHERE id = numero_id
UPDATE productos
SET provedor = 'bonafide'
WHERE id = 1; -- por defecto solo podemos usar la columna id como condicion porque es pk
SELECT * FROM productos;
-- SI DESEAMOS ACTUALIZAR OTRA COLUMNA MAS  
SET SQL_SAFE_UPDATES = 0
-- ACTUALIZAR DOS FILAS A LA VEZ
UPDATE productos
SET precio = 0.9, provedor = 'milanat'
WHERE nombre = 'cafe'
SELECT * FROM productos;
-- ACTUALIZAR DOS FILAS A LA VEZ
UPDATE productos
SET provedor = 'la_real'
WHERE provedor = 'horno_de_atenas'
SELECT * FROM productos;
-- BORRAR DATOS DE UNA TABLA ---------------------------------------------------------------------------
CREATE TABLE personas(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20) NOT NULL,
apellido VARCHAR(20) NOT NULL,
edad INT NOT NULL,
pais VARCHAR(20) NOT NULL
)
SELECT * FROM personas;
INSERT INTO personas (nombre, apellido, edad, pais)
VALUES ('sergio', 'gonzales', 50, 'Argentina'),
('juan', 'guarnizo', 30, 'mexico'),
('pedro', 'gutierres', 41, 'colombia'),
('hernesto', 'fernandez', 34, 'colombia'),
('jesica', 'rossi', 45, 'Argentina');
SELECT * FROM personas;


DELETE FROM personas
WHERE nombre = 'juan'
SELECT * FROM personas;

-- ELIMINAR VARIAS FILAS
DELETE FROM personas
WHERE pais = 'colombia'
SELECT * FROM personas;

-- PARA BORRAR TODA LA TABLA 
DELETE FROM personas; -- sin ninguna condicion
SELECT * FROM personas;






