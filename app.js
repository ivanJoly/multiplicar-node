// const argv = require('./config/yargs').argv;
const {argv} = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando){

    case 'listar':
    case 'Listar':
        console.log('Listar')
        listarTabla( argv.base, argv.limite )
        break;
    case 'crear':
    case 'Crear':
        console.log('Crear')
        crearArchivo( argv.base, argv.limite )
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido.');

}

