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
  let indicador = 0;
  let numLine = 0;
  let links = [];
  let dtsToJson;
  if (err) {
    console.log('###' + err.message);
  } else {
    // console.log(files);
    files.forEach((i) => {
      // console.log(i.indexOf(i));
      if (path.extname(i) === '.md') {
        console.log('Archivo encontrado: ' + i);
        console.log('Links Encontrados en el Archivo: ' + i);
        // contamos las lineas del documento
        let currentReader = readline.createInterface({
          input: fs.createReadStream(i)
        });
        currentReader.on('line', (line) => {
          if (line !== '') {
            let zelda = mdLinks.mdLinkExtractor(i, line);
            let result;
            if (zelda.length > 0) {
              let found = links.find(item => {
                console.log(item);
                console.log(zelda);
                item.href === zelda;
                return result = true;
              });
              if (result) {
                
              }
              else {
                links.push(zelda);
              }
            } 
            //console.log('link ' + JSON.stringify(links));
          }
          
        });
       
       
        indicador === 0;
      } else if (path.extname(i) !== '.md') {
        indicador = indicador + 1;
      }
    });
    console.log(links);
  }
  if (indicador !== 0) {
    console.log('No hay archivos tipo .md en la carpeta indicada');
  }
});

