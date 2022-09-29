
-- AGREGAR Y QUITAR PRIMARY KEYS------------------------------------------------
CREATE DATABASE grupos
USE grupos
-- CREATE TABLE nombre_tabla (
-- columna1 tipo_dato(tamaño) NOT NULL,
-- columna2 tipo_dato(tamaño) NOT NULL,
-- ...
-- PRIMARY KEY columna1
-- );
CREATE TABLE persona (
idpersona int NOT NULL,
nombre varchar(10) NOT NULL,
apellido varchar(10) NOT NULL
);
-- mostrar tabla descrita para comprobar su creacion
DESC persona;
-- AGREGAR LLAVE PRINCIPAL-----------------------------------------------------------------------------
-- ALTER TABLE nombre_tabla
-- ADD PRIMARY KEY (nombre_columna)
ALTER TABLE persona
ADD PRIMARY KEY (idpersona)
DESC persona;

CREATE TABLE persona2 (
idpersona int NOT NULL,
nombre varchar(10) NOT NULL,
apellido varchar(10) NOT NULL,
PRIMARY KEY (idpersona)
);

SHOW TABLES;
DESC persona2;
-- BORAR TABLA
-- ALTER TABLE nombre_tabla
-- DROP PRIMARY KEY
ALTER TABLE persona2
DROP PRIMARY KEY

DESC persona2;

-- AGREGAR Y QUITAR FOREIGN KEYS----------------------------------------------------------------------
DESCRIBE persona 
DESCRIBE persona2 
-- ALTER TABLE nombre_tabla_modifica
-- ADD CONSTRAINT nombre_restriccion
-- FOREING KEI (nombre_columna_clave_forania) REFERENCES nombre_tabla_que_va_referenciar(clave_primaria)
ALTER TABLE persona2 
ADD CONSTRAINT FK_PERSONAID -- Añadir restriccion
FOREIGN KEY (idpersona) REFERENCES persona(idpersona)

DESCRIBE persona 
DESCRIBE persona2 

-- ELIMINAR CLAVE FORANEA
ALTER TABLE persona2 
DROP FOREIGN KEY FK_PERSONAID 

-- AGREGAR UNIQUE CONSTRAINT -------------------------------------------------------------------------------
-- Sirve para que pueda recibir un unico valor sin  que se repita
Desc persona
-- ALTER TABLE tabla 
-- ADD CONSTRAINT unique_nombre UNIQUE (nombre_columna)

ALTER TABLE persona 
ADD CONSTRAINT u_nombre UNIQUE (nombre)
desc persona 

-- definir UNIQUE CONSTRAINT al definir la tabla
CREATE TABLE persona3 (
id int NOT NULL,
nombre varchar(30),
apellido varchar(30),
direccion_id int NOT NULL,
PRIMARY KEY (id),
UNIQUE (direccion_id)
)
SHOW TABLES;
DESC persona3;

-- BORRAR UNIQUE
-- ALTER TABLE nombre_tabla
-- DROP INDEX (nombre_columna_unique)
ALTER TABLE persona3
DROP INDEX direccion_id
DESC persona3;

-- CAMBIAR NOMBRE DE COLUMNAS -----------------------------------------------------------------------
DESC persona3;
SELECT * FROM persona3;
-- ALTER TABLE nombre_tabla
-- CHANGUE columna_a_cambiar nombre_nuevo datos();
ALTER TABLE persona3
CHANGE apellido edad INT(10)
DESC persona3;

-- CAMBIAR DATA TYPE COLUMNA --------------------------------------------------------------------------
-- ALTER TABLE nombre_tabla
-- MODIFY nombre_columna_modificar tipo_dato(tamaño)

ALTER TABLE persona3
MODIFY nombre char(12)
DESC persona3;














