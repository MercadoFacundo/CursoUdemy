def app():
    #crear el archivo
    archivo = open('archivo.txt', 'w') # w es escritura, si no 
    #lo va a crear

    #generar numeros en archivos
    for i in range(0, 20):
        archivo.write('Esta es la linea ' + str(i) + '\r\n')

    #cerrar el archivo
    archivo.close()

#puse una linea
app()

#Documentacion de la rama2

#agrego mas lineas

#Sigo agregando lineas

#Arregle el issue
print('Cerrar ventana')

