let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Correcto, acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos lo números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el nro generado esta en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();


