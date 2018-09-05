# Libreria mDownLinks (Markdown Links)

Libreria desarrollada para extraer los links de un archivo de tipo markdown, el usuario puede ingresar ya sea la ruta absoluta o relativa del archivo que desea evaluar, tambien puede verificar si los links econtrados estan rotos o no.

## Antes de Empezar  :checkered_flag:

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### Pre-requisitos   :ballot_box_with_check:


_Que cosas necesitas para instalar el software y como instalarlas_

```
Da un ejemplo
```

### Instalación  :floppy_disk:

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Se instala directamente desde la terminal con npm_

```
$ npm install mDownLinks --save
```

## Modo de Uso  :large_blue_circle:

_Una vez intalado en la terminal o añadido como modulo al proyecto hay diversas maneras de utilizar la libreria, ya sea ingresando la ruta absoluta del archivo a evaluar:_

```
$ md-links C:/Users/Admin/Documents/PROYECTO/TALLERES
```
En este caso la libreria verifica si hay un archivo de tipo .md en la dirección especificada, si lo hay mostrará un listado de los links que se encuentren en el:

![Listado de Links](/img/RESPUESTA1.png)

El listado muestra la ruta relativa del archivo, el nombre de este, la linea enla que se encontró el link, el link y el texto de este.

_Si queremos validar si los links estan rotos o no, ejecutamos denuevo peor agregando la opcion ```--validate```_
```
$ md-links C:/Users/Admin/Documents/PROYECTO/TALLERES --validate
```
Nos mostrará lo siguiente:
![Listado de Links](/img/RESPUESTA2.png)

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS




## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles
