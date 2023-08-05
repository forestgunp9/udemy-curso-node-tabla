

const {crearArchivo} = require('./helpers/multiplicar');
// const argv = require('yargs').argv;
const argv = require('./config/yargs');

console.clear(); 

///Argumentos consola
// console.log(process.argv);
//No es recomendado hacerlo en la forma de las siguientes 2 lineas. Tiene inconvenientes. Usar un paquete para esto, ya existente.
// const [,,arg3='base=5']=process.argv;
// const [,base=5]=arg3.split('=');

// console.log(process.argv);
console.log(argv);


console.log('base en yargs: '+argv.base);
console.log('b en yargs: '+argv.b);
// console.log('base:'+base);
console.log('listar en yargs: '+argv.lstar);


//const base = 8;

crearArchivo(argv.b,argv.l,argv.h)
  .then(nombreArchivo => console.log(nombreArchivo))
  .catch(err => console.log('Catch encadenado: '+err));