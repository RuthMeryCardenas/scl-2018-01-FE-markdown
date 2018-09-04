#!/usr/bin/env node


const fs = require('fs');
readline = require('readline');
const path = require('path');
const mdLinks = require('./lib/md-links');
const fetch = require('node-fetch');

// Extraemos la ruta que el usuario ingresó y devolvemos el nombre del directorio de la ruta

if (path.isAbsolute(process.argv[2])) {
  console.log(' absoluta ');
  let ruta = path.dirname(process.argv[2]);
  // let ruta = path.dirname(process.argv[2]);
  // console.log("Ruta: "+ruta);
  // console.log(process.argv[2]);
  let root = process.argv[2];
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
              links = mdLinks.mdLinkExtractor(ruta, line, numLine);
              links.forEach(element=>{
                if (element !== []) {
                  fetch(element.href)
                    .then(response => {
                      let statusLine = response.status;
                      // console.log('holi' + response.status);
                      console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' ' + element.text);
                    }).catch((error) => {  
                      console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + '404' + ' ' + element.text);
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
} else {
  console.log('no absoluta');
  i = path.resolve(process.argv[2]);
  console.log(i);
  let direc = process.argv[2];
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
        links = mdLinks.mdLinkExtractor(direc, line, numLine);
        links.forEach(element=>{
          if (element !== []) {
            fetch(element.href)
              .then(response => {
                let statusLine = response.status;
                // console.log('holi' + response.status);
                console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + statusLine + ' ' + element.text);
              }).catch((error) => {
                console.log(element.file + ' Linea:' + element.line + ' ' + element.href + ' Status:' + '404' + ' ' + element.text);
              });
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
