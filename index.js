#!/usr/bin/env node


const mdLinks = require('./lib/md-links');
const fetch = require('node-fetch');

let fileDir = process.argv[2];
let validate = process.argv[3];

 mdLinks.mdLinks(fileDir, validate);
/*
if (require.main === module) {
  mdLinks.mdLinks(fileDir, validate)
    .then(respuesta => {
      console.log(respuesta);
    })
    .catch(console.error);
} else {
  // Me están ejecutando como módulo, debería exportar la función solamente
}*/


