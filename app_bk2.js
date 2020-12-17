const argv = require('yargs')
        .command('listar', 'Imprime en consola una tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
        .help()
        .argv;


const { crearArchivo } = require('./multiplicar/multiplicar')

//let base = 3;

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        console.log('listar');
    break;
    case 'crear':
        crearArchivo(argv.base)
            .then( archivo => console.log(`Archivo creado ${ archivo }`))
            .catch( e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
}