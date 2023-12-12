// Resolucion propuesta por el profe
const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    //console.log(numeroSecreto);
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adivina el numero secreto!');
    console.log('Intenta adivinar el numero del 1 al 100.');

    while (numeroAdivinado != numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();