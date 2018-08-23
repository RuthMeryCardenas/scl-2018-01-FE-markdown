#!/usr/bin/env node

//module.exports.mdLinks = ((file)=>{

//});

const fs=require('fs');
const path = require('path');
let argumento=[];
fs.readFile('./readme.md', (error,datos) => {
  if (error)
    console.log(error);
  else
  /*process.argv.forEach(function (val, index, array) {
    //argumento=val;
    console.log(val);

  });*/
  //console.log(process.argv[1]);
  argumento=process.argv[1];
  //console.log(process.argv[1]);
    //console.log(datos.toString());
});

const readme = process.argv[1];
console.log(readme);
//const [, , ...args] = process.argv;

fs.readdir(readme, (err, files)=> {
  if (err) {
    console.log('Error reading files: ', err);
  }
  console.log(readme);
  /*
  files.forEach ((i)=> {
    // read its contents.
    if (path.extname(files[i] === '.md')) {
      console.log(files[i]);
      fs.readFile(files[i], function(error, data) {
        if (error) {
          console.log('error', error);
        }
        console.log(data);
      });
    }
  }); */
}); 


//console.log('Datos del readme:');

//console.log("process.argv: "+process.argv);