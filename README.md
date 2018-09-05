# Libreria mDownLinks (Markdown Links)

Libreria desarrollada para extraer los links de un archivo de tipo markdown, el usuario puede ingresar ya sea la ruta absoluta o relativa del archivo que desea evaluar, tambien puede verificar si los links econtrados estan rotos o no.

## :checkered_flag: Antes de Empezar  

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### :pencil: Pre-requisitos   


_Que cosas necesitas para instalar el software y como instalarlas_

```
Da un ejemplo
```

### :floppy_disk: Instalación  

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Se instala directamente desde la terminal con npm_

```
$ npm install mDownLinks --save
```

## :ballot_box_with_check: Modo de Uso  

_Una vez intalado en la terminal o añadido como modulo al proyecto hay 2 maneras de utilizar la libreria:_
 
:one: Puede utilizarse ingresando una ruta absoluta donde se encuentre el archivo a evaluar:

```
$ md-links C:/Users/Admin/Documents/PROYECTO/TALLERES
```
En este caso la libreria verifica si hay un archivo de tipo .md en la dirección especificada, si lo hay mostrará un listado de los links que se encuentren en el.


:two: Tambien puede utilizarse ingresando la ruta relativa y nombre del archivo a evaluar:

```
$ md-links ./readme2.md
```
En ambos casos la libreria responderá mostrando un listado con los links encontrados:

![Listado de Links](/img/RESPUESTA3.png)

En el listado se muestran los siguientes datos de interés: la ruta relativa del archivo, el nombre del archivo que se esta evaluando, la linea en la que se encontró el link, la direccion URL del link y el texto de este.

Ahora si queremos validar si los links encontrados estan rotos o no, ejecutamos denuevo agregando la opcion ```--validate```
```
$ md-links C:/Users/Admin/Documents/PROYECTO/TALLERES --validate
```
Ó
```
$ md-links ./readme2.md --validate
```

Nos mostrará lo siguiente:
![Listado de Links Evaluados](/img/RESPUESTA2.png)

Donde se agrega al listado el status de los links: Ok si los links son validos y Fail si estan rotos.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS




## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles
