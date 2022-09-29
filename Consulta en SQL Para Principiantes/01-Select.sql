
-- Select: Traer todos los datos de la tabla
SELECT * FROM Personas
-- Columna en especifico: Consultar nombre y la direccio de la tabla personas
Select Nombre, Apellido from  Personas
-- Select camviar alias tabla: Cambiar el nombre de "Nombre" a "name" y apellido a "lastname"
Select Nombre as name, Apellido  as lastname from Personas
-- Select Distinct:
 Select DISTINCT Pais from Personas
 
 -- Ejercicios
-- Mostrar el id de la persona y el nomre
 Select idPersonas, Nombre from Personas
-- Asigna un alias Nombre y escribe name y a apellido lastneme.
Select Nombre as "name", Apellido as "lastname" from Personas
-- Muestra los campos distintos de edad
Select DISTINCT Edad from Personas
-- Consulta el primera letra del nombre en columna pais de la tabla pais
Select left (Pais,1) from Personas
-- Asi mismo muestra las letras del final
Select RIGHT (Pais,1) as "inicial final", Pais from Personas
-- Muestra los nombres en mayuscula de la columna pais
Select UPPER(Pais) from Personas 
-- Ahora lo muestro en minuscula
Select LOWER(Pais) from Personas 
-- Muestra cuantos caracteres tienen los campos de la columna pais
Select LENGTH(Pais) from Personas
-- Concatenar id de la persona con su nombre
Select CONCAT(idPersonas," ",Nombre) from Personas 
-- Multiplicar edad * 2
Select Edad*2.5 from Personas
-- Redondear a 0 decimales
Select Edad, ROUND(Edad,0) from Personas 
-- Muestra el valor de PI
Select PI()
