# Libreria mDownLinks (Markdown Links)

Libreria desarrollada para extraer los links de un archivo de tipo markdown, el usuario puede ingresar ya sea la ruta absoluta o relativa del archivo que desea evaluar, tambien puede verificar si los links econtrados estan rotos o no.

## :checkered_flag: Antes de Empezar  

_Antes de utilizar esta libreria es necesario instalar las dependencias que utiliza para su correcto desempeño._

En primera instancia es necesario tener instalado Node.js y npm, para verificarlo nos colocamos en la terminal y ejecutamos este comando:
```
nodejs-v
```
 si no esta instalado, puedes instalarlo según tu sistema operativo desde acá: [Node.js] (https://nodejs.org/en/download/).
Una vez instalado node, instalamos npm:
```
install npm 
```
Ahora instalamos las demás dependencias, estas pueden instalarse ya sea de manera global:

```
$npm install marked --global
$npm install node-fetch --global
```
Ó como dependencia del proyecto instalandolas directamente en la carpeta contenedora del proyecto:
```
$npm install marked --save
$npm install node-fetch --save
```

## :floppy_disk: Instalación  

_La libreria se instala directamente desde la terminal con npm_

```
$ npm install mDownLinks --save
```

## :ballot_box_with_check: Modo de Uso  

_Una vez instalado en la terminal o añadido como modulo al proyecto hay 2 maneras de utilizar la libreria:_
 
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

Ahora, si queremos validar si los links encontrados estan rotos o no, ejecutamos denuevo agregando la opcion ```--validate```
```
$ md-links C:/Users/Admin/Documents/PROYECTO/TALLERES --validate
```
Ó
```
$ md-links ./readme2.md --validate
```

Nos mostrará lo siguiente:
![Listado de Links Evaluados](/img/RESPUESTA2.png)

Donde se agrega al listado el status de los links: 

 :ok_woman: Ok si los links son validos.
 
  :no_good: Fail si estan rotos.

## :speech_balloon: Referencias

_Información utilizada para crear la libreria_

* [Node.js](https://nodejs-es.github.io/api/) - Documentacion node (español).
* [FileSystem](https://desarrolloweb.com/articulos/lectura-archivos-nodejs.html) - Modulo File System Node (español).
* [Modulos npm](https://medium.com/@peraferrer/como-crear-un-m%C3%B3dulo-npm-6baef161a96) - Como crear Librerias.
* [npm](https://ed.team/blog/como-publicar-en-npm) - Publicación de Modulos con NPM.
* [Markdown](https://github.com/ricval/Documentacion/blob/master/Guias/GitHub/mastering-markdown.md) - Estructura de los archivos Markdown. 

_Link directo a la libreria en npm_
[Libreria mDownLinks npm](https://www.npmjs.com/settings/karynherrera/packages)

## 📄 Modelo Kanban 

Para la realización del proyecto se siguió el modelo Kanban, dividiendo la historia de usuario en tareas y así optimizando mejor los tiempos y sprints.
Puede verificar la organización acá:
[Modelo Kanban mDownLinks](https://trello.com/b/wMGp0JUl/markdown) - Organización del Proyecto.


