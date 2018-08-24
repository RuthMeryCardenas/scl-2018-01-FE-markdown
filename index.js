#!/usr/bin/env node

module.exports.mdLinks = ((file) => {

});
const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const mdLinks = require('./lib/md-links');

// vemos la ruta actual del archivo
console.log(`Directorio actual: ${__dirname}`);
const directory = __dirname;

// transforma el contenido del archivo a string
let dirRe = Buffer.from(directory);


fs.readdir(dirRe, (err, files) => {
  if (err) {
    console.log("###" + err.message);
  } else {
    console.log(files);
    files.forEach((i) => {
      if (path.extname(i) === '.md') {
        console.log("archivo encontrado: "+i);
        fs.readFile(i, 'utf8', (err, data)=> {
          if (err) {
            console.log(err.message);
          } else {
            //console.log(data);
            let zeldas = mdLinks.markdownLinkExtractor(data);
            console.log(zeldas);
          }
        })
      }
    });
  }

  
});