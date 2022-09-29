-- Funcion de agregacion
-- SUM() Suma las edades entre 30 y 60
SELECT SUM(Edad) From Personas
WHERE Edad BETWEEN 30 and 60
-- COUNT() Cuenta los paises que comiencen con la letra a, Devuelve el numero de filas
-- que coincide con un critetio especifico
SELECT COUNT(Pais) from Personas
WHERE Pais like 'a%'
-- AVG() Devuelve el valornumero de una columna
Select AVG(Edad) from Personas
-- MIN()
Select Min(Edad) From Personas
-- MAX()
Select MAX(Edad) from Personas
-- GROUP BY Cuenta el numero de personas que pertenecen a cada pais - Agrupa filas que tienen el mismo valor
Select Pais, COUNT(Nombre) From Personas
Group By Pais 
-- HAVING muestra a las personas que tengas mas de 27 rentas
Select Nombre  , Count(RentasID) From Personas
inner join rental on c.modificar_id = r.modificar_id
Group by Nombre  
HAVING COUNT(RentasID) > 27









