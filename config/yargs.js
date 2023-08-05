const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar.'.green
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        // demandOption:true,
        default: false,
        describe:' Indica si listar o no las multiplicaciones'.green
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        // demandOption:true,
        default: 10,
        describe:' Indicar hasta que valor multiplicar'.green
    })
    .check((argv, options) => {
        if (isNaN(argv.base)){
            throw 'La base tiene que ser un número'.red;
        }else if (isNaN(argv.hasta)){
            throw 'El hasta tiene que ser un número'.red;
        }else if (argv.hasta < 1){
            throw 'El hasta tiene que ser un número mayor que 0'.red;
        }else
            return true;

    })
    .argv;

    module.exports = argv;