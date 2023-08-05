
const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) =>{

//     return new Promise((resolve,reject) => {
//         try{
//             let salida ='';

//             console.log('==================');
//             console.log('tabla del:'+ base);
//             console.log('==================');

//             for(let i=1; i <= 10; i++){
//                 salida +=`${base} x ${i} =${base * i}\n`;
//             }

//             console.log(salida);
//             let nombreArchivo = `tabla-${base}.txt`;
//             fs.writeFileSync(nombreArchivo, salida);
//             console.log(nombreArchivo + ` creado!`);
//             if (true) throw ('Todo mal che');
//             resolve(nombreArchivo);
//         }catch(err){
//             reject('Error en crearArchivo: '+err);
//         }
//     });

// }

//Lo anterior mas simple con async:
const crearArchivo = async(base = 5, listar=false, hasta) =>{

        try{
            let salida ='';
            let consola ='';

            for(let i=1; i <= hasta; i++){
                salida +=`${base} x ${i} =${base * i}\n`;//sin color para que no genere caracteres especiales en el archivo de salida
                consola +=`${base} x ${i} =${base * i}\n`.green;
            }

            if (listar){
                console.log('=================='.yellow);
                console.log('tabla del: '.yellow + base);
                console.log('=================='.yellow);
                console.log(salida);
            }
                
            let nombreArchivo = `./salida/tabla-${base}.txt`;
            fs.writeFileSync(nombreArchivo, salida);
            console.log(nombreArchivo + ` creado!`.red);
            
            return nombreArchivo;
        }catch(err){
            return 'Error en crearArchivo: '+err;
        }
}



// module.exports = {
//     crearArchivo : crearArchivo
// }
module.exports = {
    crearArchivo
}