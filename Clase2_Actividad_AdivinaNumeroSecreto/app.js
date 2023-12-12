// Resolucion propia de la actividad 'busqueda_numero_secreto'.

const Chance = require('chance');
const readlineSync = require('readline-sync');

const chance = new Chance();

// Generar aleatoriamente un numero entero entre 1 y 100

const randomInteger = chance.integer({min: 1, max:100});
//console.log(randomInteger);

let x = true;
while(x){
    let numUser = readlineSync.question('Por favor, ingrese un numero: ');
    if(randomInteger == numUser){
        console.log(`Felicitaciones, le has acertado. El numero incognita era bien el ${randomInteger}`);
        x = false;
    }else if(numUser > randomInteger){
        if((numUser - randomInteger) > 10){
            console.log('El numero ingresado supera en mas de 10 unidades al numero incongnita');
            //let numUser = readlineSync.question('Por favor, ingrese otro numero: ');
        } else if((numUser - randomInteger) <= 10){
            console.log('Bien! No estas tan lejos. El numero ingresado supera en menos de 10 unidades al numero incongnita');
            //let numUser = readlineSync.question('Por favor, ingrese otro numero: ');
        };
    }else{
        if((randomInteger - numUser) > 10){
            console.log('El numero incognita supera en mas de 10 unidades al numero ingresado');
            //let numUser = readlineSync.question('Por favor, ingrese otro numero: ');
        }else if((randomInteger- numUser) <= 10){
            console.log('Bien! No estas tan lejos. El numero incognita supera en menos de 10 unidades al numero ingresado');
            //let numUser = readlineSync.question('Por favor, ingrese otro numero: ');
        };

    }
};

