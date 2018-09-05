const fs = require('fs');
readline = require('readline');
const path = require('path');
const Marked = require('marked');
const fetch = require('node-fetch');

let name = '';
let mdLinks = {};
const NewJson = [];


// fetch = require('node-fetch');

// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo

exports.mdLinks = (fileDir, validate) =>{
  let respuesta;
  if (path.isAbsolute(fileDir)) {
    // console.log(' absoluta ');
    let ruta = path.dirname(fileDir);
    // let ruta = path.dirname(process.argv[2]);
    // console.log("Ruta: "+ruta);
    // console.log(process.argv[2]);
    let root = fileDir;
    // vemos la ruta actual del archivo
    console.log(`Directorio actual: ${__dirname}`);
    const directory = __dirname;
  
    // transforma el contenido del archivo a string
    let dirRe = Buffer.from(root);
    // let rutaRel = path.resolve(rutaAbs);
    // leemos la ruta del directorio
    fs.readdir(dirRe, (err, files) => {
      let md = 0, others = 0;
      let numLine = 0;
      let links;
    
      if (err) {
        console.log('No se encuentra el archivo en el directorio');
      } else {
      // console.log(files);
        files.forEach((i) => {
        // console.log(i.indexOf(i));
        // verificamos la extensión del archivo 
          if (path.extname(i) === '.md') {
            md++;
            console.log('Archivo encontrado: ' + i);
            console.log('Links Encontrados en el Archivo: ' + i);
            rutaAbs = root + '/' + i;
            // verificamos la ruta relativa del archivo
            ruta = path.relative(directory, rutaAbs);
            // ruta = path.resolve(rutaAbs);
            let currentReader = readline.createInterface({
              input: fs.createReadStream(i)
            });
            currentReader.on('line', (line) => {
              if (line !== '') {
              // contamos las lineas del documento
                numLine++;
                links = exports.mdLinkExtractor(ruta, line, numLine);
                if (validate !== undefined) {
                  if (validate === '--validate') {
                    // console.log('validando' + validate);
                    links.forEach(element=>{
                      if (element !== []) {
                        fetch(element.href)
                          .then(response => {
                            let statusLine = response.status;
                            // console.log('holi' + response.status);
                            respuesta = 'Respuesta:' + element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' Ok -> ' + element.text;
                            console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' Ok -> ' + element.text);
                          }).catch((error) => {  
                            console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + '404 Fail' + ' -> ' + element.text);
                          });
                      }
                    });
                  } else {
                    console.log('Comando no valido');
                  }
                }
                links.forEach(element=>{
                  if (element !== []) {
                    console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' -> ' + element.text);
                  }
                });
              } else {
                numLine++;
              }
            }); 
          } else {
            others++;
          }
        // console.log(links);
        });
        if (md === 0) {
          console.log('No hay archivos tipo .md en la carpeta indicada');
        } if (others === 0) {
          console.log('No hay archivos en la carpeta indicada');
        }
      }
    });
  } else {
    // console.log('no absoluta');
    i = path.resolve(fileDir);
    console.log(i);
    let direc = fileDir;
    // console.log("Ruta: "+ruta);
    // console.log(process.argv[2]);
    let root = i;
    // vemos la ruta actual del archivo
    console.log(`Directorio actual: ${__dirname}`);
    const directory = __dirname;
  
    // transforma el contenido del archivo a string
    let dirRe = Buffer.from(i);
    // let rutaRel = path.resolve(rutaAbs);
    // leemos la ruta del directorio
    
    // verificamos la extensión del archivo 
    if (path.extname(i) === '.md') {
      let numLine = 0;
      console.log('Archivo encontrado: ' + i);
      console.log('Links Encontrados en el Archivo: ' + i);
      rutaAbs = i;
      // verificamos la ruta relativa del archivo
      ruta = path.relative(directory, direc);
      // ruta = path.resolve(rutaAbs);
      let currentReader = readline.createInterface({
        input: fs.createReadStream(i)
      });
      currentReader.on('line', (line) => {
        if (line !== '') {
          // contamos las lineas del documento
          numLine++;
          links = exports.mdLinkExtractor(direc, line, numLine);
          if (validate !== undefined) {
            if (validate === '--validate') {
              links.forEach(element=>{
                if (element !== []) {
                  fetch(element.href)
                    .then(response => {
                      let statusLine = response.status;
                      // console.log('holi' + response.status);
                      console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' Ok -> ' + element.text);
                    }).catch((error) => {
                      console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + '404 Fail' + ' -> ' + element.text);
                    });
                }
              });
            } else {
              console.log('Comando no valido');
            }
          }
          links.forEach(element=>{
            if (element !== []) {
              console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' -> ' + element.text);
            }
          });
        } else {
          numLine++;
        }
      }); 
    } else {
      
    }
    // console.log(links);
  } 
  return respuesta;
};

exports.mdLinkExtractor = (nameFile, markdown, lines) => {
  const links = [];
  const dtsToJson = [];
  const renderer = new Marked.Renderer();
  name = nameFile;
  
  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  
  renderer.link = (href, title, text) => {
    if (href !== ['']) {
      // let respuestaStatus = statusLinks(href);
      links.push({
        file: name,
        line: lines,
        href: href,
        // status: respuestaStatus,
        text: text,
        
      });
      dtsToJson.push({
        href: href,
        text: text,
        line: lines,
      });
    }
  };
  renderer.image = (href, title, text)=> {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    if (href !== []) {
      // let respuestaStatus = statusLinks(href);
      links.push({
        file: name,
        line: lines,
        href: href,
        // status: respuestaStatus,
        text: text,
        
      });
      dtsToJson.push({
        href: href,
        text: text,
        line: lines,
      });
    }
  };
  Marked(markdown, { renderer: renderer });
  // console.log(links);
  return links;
};

const createApi = ((dtsToJson)=>{  
  dtsToJson.forEach(element => {
    if (element !== ['']) {
      NewJson.push({
        nameFile: name,
        href: element.href,
        text: element.text,
        line: element.line,
        file: 'ruta',
      });
    }
  });
  console.log('datos para el json: ' + JSON.stringify(NewJson));
});

const statusLinks = (link)=>{
  let respuesta;
  fetch(link)
    .then(response => {
      response.status;
      // console.log('holi' + response.status);
     
      if (response.status === 200) {
        respuesta = '200';
      }
      console.log('dentro ' + respuesta);
    });
  console.log(respuesta);
  return respuesta;
  // console.log("fuera"+respuesta);
};