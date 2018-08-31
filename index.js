#!/usr/bin/env node

module.exports.mdLinks = ((file) => {

});
const fs = require('fs');
readline = require('readline');
const path = require('path');
const mdLinks = require('./lib/md-links');
const fetch = require('node-fetch');

// Extraemos la ruta que el usuario ingresó y devolvemos el nombre del directorio de la ruta
let ruta = path.dirname(process.argv[2]);
// console.log("Ruta: "+ruta);
// console.log(process.argv[2]);
let root = process.argv[2];
// vemos la ruta actual del archivo
console.log(`Directorio actual: ${__dirname}`);
const directory = __dirname;

// transforma el contenido del archivo a string
let dirRe = Buffer.from(root);

// leemos la ruta del directorio
fs.readdir(dirRe, (err, files) => {
  let md = 0, others = 0;
  let numLine = 0;
  let links;
  
  if (err) {
    console.log('###' + err.message);
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
            links = mdLinks.mdLinkExtractor(ruta, line, numLine);
            links.forEach(element=>{
              if (element !== []) {
                fetch(element.href)
                  .then(response => {
                    let statusLine= response.status;
                    // console.log('holi' + response.status);
                    console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' ' + element.text);
                  }).catch((error) => {
                    console.log(error);
                  });
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

