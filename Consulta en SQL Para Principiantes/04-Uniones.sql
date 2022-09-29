-- Uniones
-- INNER JOIN - Selecciona registros que tienen valores coincidentes en ambas tablas
Select * From Personas
inner join
-- LEFT JOIN Devuelve todos los registros de la tabla de la izquierda y los registros coincidentes de la tabla de
-- la derecha.
Select * from Personas p 
Left join
-- RIGHT JOIN Devuelve los registros de la tabla derecha y los registros coincidentes de la tabla izquierda.
Select * from Personas p 
Right join