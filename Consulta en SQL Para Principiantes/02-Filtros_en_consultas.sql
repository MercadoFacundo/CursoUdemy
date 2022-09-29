-- Consulta con filtro WHERE numerico
SELECT Edad, Nombre from Personas 
WHERE Edad > 30
-- Consulta con filtro WHERE texto
SELECT Pais, Nombre from Personas
WHERE Pais != "Argentina"
-- Consulta con filtro WHERE y IN Paises que sean solo argentina y uruguay
SELECT idPersonas, Pais from Personas
WHERE Pais IN ('Argentina', 'Uruguay')
-- Consulta con filtro WHERE y BETWEEN personas que tengan entre 30 y 60 años
SELECT Nombre, Edad FROM Personas
WHERE Edad BETWEEN '30' AND '60'
-- Consulta con filtro WHERE y LIKE Se usca un patron especifico en una columna
SELECT Nombre, idPersonas FROM Personas
WHERE Nombre like 'P%' -- Se puede buscar '%letra' ultima letra o 'letra%' primera letra
-- Consulta Where AND, pais que comienza con a y nombre que comienza con f
Select Pais, Nombre  from Personas WHERE Pais like 'a%'
AND Nombre LIKE 'f%'
-- Consulta WHERE OR  paises que empiezen con E o Z o C
Select Pais, idPersonas  from Personas WHERE Pais like 'e%'
OR Pais LIKE 'Z%' OR Pais like 'C%'
-- Consulta WHERE NOT paises que no comienzan con E
Select Pais, idPersonas  from Personas WHERE NOT Pais like 'e%'
-- Consulta ORDER BY Ascendente
Select Edad, Nombre from Personas
Order BY Edad ASC 
-- Descendente
Select Edad, Nombre from Personas
Order BY Edad DESC 

-- EJERCICIOS
-- Personas que contengan ON en su nombre
SELECT Nombre  from Personas
where Nombre  like '%on%'
-- Personas que contengan una O en su nombre y una e en su Apellido 
SELECT Nombre, Apellido from Personas
WHERE nombre LIKE '%o%' AND Apellido LIKE '%e%'
-- Persona que contenga dos ll en su Apellido 
SELECT Apellido from Personas
WHERE Apellido like '%l%l%'
-- Persona que su tercera letra contenga la C
SELECT Nombre from Personas
where Nombre LIKE '__C%'
-- Pais que comience con Direccion 
SELECT Pais from Personas
WHERE Pais like 'C%'
-- Pais que termine su letra con A
SELECT Pais from Personas
WHERE Pais like '%a'
-- Personas que tenga una edad entre 30 y 60 años
Select Nombre, Edad From Personas
where Edad BETWEEN '30' AND '60'
-- personas que se llamen Julia y maxi
Select Nombre from Personas
WHERE Nombre IN ('Julia', 'Maxi')
-- Sub consulta con el id de Taiwan
Select * from Personas
WHERE idPersonas = (SELECT idPersonas from Personas where pais = 'Taiwan')












