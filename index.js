#!/usr/bin/env node

module.exports.mdLinks = ((file) => {

});
const fs = require('fs');
readline = require('readline');
const path = require('path');
const mdLinks = require('./lib/md-links');


// Extraemos la ruta que el usuario ingresó
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
  let dtsToJson;
  if (err) {
    console.log('###' + err.message);
  } else {
    // console.log(files);
    files.forEach((i) => {
      // console.log(i.indexOf(i));
      if (path.extname(i) === '.md') {
        md++;
        console.log('Archivo encontrado: ' + i);
        console.log('Links Encontrados en el Archivo: ' + i);
        // contamos las lineas del documento
        
        let currentReader = readline.createInterface({
          input: fs.createReadStream(i)
        });
        currentReader.on('line', (line) => {
          if (line !== '') {
            numLine++;
            links = mdLinks.mdLinkExtractor(i, line, numLine);
            links.forEach(element=>{
              if (element !== []) {
                console.log(element);
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
    } else {
      // console.log(links);
    }
  }
});

