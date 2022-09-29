USE Curso_CeSQLpP

# AGREGAR Y QUITAR COLUMNAS
-- Crear una tabla nueva con columnas existentes como en la tabla personas
CREATE TABLE Tabla_Prueba
SELECT Nombre, Apellido, Direccion From Personas;
Select * FROM Tabla_Prueba
-- VAmos a agregar una columna nueva
-- Alter TABLE nombre_tabla
-- ADD COLUMN columna_nueva tipo_de_dato(tamaño);
ALTER TABLE Tabla_Prueba
ADD COLUMN Telefono INT(10)
SELECT * FROM Tabla_Prueba

-- Vamos a descartar una columna de la nueva tabla en este caso direccion
-- ALTER TABLE nombre_tabla
-- DROP COLUMN columna_nueva;
ALTER TABLE Tabla_Prueba
DROP COLUMN Direccion;
SELECT * FROM Tabla_Prueba

-- Eliminacion de tabla
-- DROP TABLE nombre_tabla
DROP TABLE tabla1

SHOW TABLES

-- TRUNCAR TABLAS: eliminamos todos los datos que fueron cargados de la tabla. 
-- TRUNCATE TABLE nombre_tabla
SELECT * FROM Tabla_Prueba
TRUNCATE TABLE Tabla_Prueba
SELECT * FROM Tabla_Prueba








