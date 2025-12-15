'use strict';

var secuenciaJuego = [];
var secuenciaUsuario = [];
var nivel = 0;
var puntaje = 0;
var nombreUsuario = '';
var colores = ['verde', 'rojo', 'amarillo', 'azul'];
var bloqueado = false; 

var seccionInicio;
var seccionJuego;
var modalGameOver;
var inputNombreInicio;
var btnJugar;
var btnReiniciar;
var spanNombreJugador;
var spanPuntaje;
var spanPuntajeFinal;
var spanNivel;
var mensajeErrorInicio;
var botonesColores = {};

function obtenerColorAleatorio() {
    var indice = Math.floor(Math.random() * 4);
    return colores[indice];
}

function reiniciarVariables() {
    secuenciaJuego = [];
    secuenciaUsuario = [];
    nivel = 0;
    puntaje = 0;
    bloqueado = false;
    actualizarPuntajeDOM();
    spanNivel.textContent = '1';
}

function actualizarPuntajeDOM() {
    spanPuntaje.textContent = puntaje;
}

function actualizarNivelDOM() {
    spanNivel.textContent = nivel;
}

function iluminarColor(color) {
    var elemento = botonesColores[color];
    elemento.classList.add('iluminado');
    setTimeout(function() {
        elemento.classList.remove('iluminado');
    }, 500);
}

function reproducirSecuencia() {
    bloqueado = true;
    secuenciaUsuario = [];
    var i = 0;
    
    var intervalo = setInterval(function() {
        if (i >= secuenciaJuego.length) {
            clearInterval(intervalo);
            bloqueado = false;
            return;
        }
        iluminarColor(secuenciaJuego[i]);
        i++;
    }, 1000);
}

function siguienteNivel() {
    nivel++;
    actualizarNivelDOM();
    var nuevoColor = obtenerColorAleatorio();
    secuenciaJuego.push(nuevoColor);
    reproducirSecuencia();
}

function procesarClickUsuario(e) {
    if (bloqueado) return;

    var colorElegido = e.target.getAttribute('data-color');
    
    if (!colorElegido) return;

    iluminarColor(colorElegido);
    secuenciaUsuario.push(colorElegido);

    var indiceActual = secuenciaUsuario.length - 1;

    if (secuenciaUsuario[indiceActual] !== secuenciaJuego[indiceActual]) {
        perderJuego();
        return;
    }

    puntaje++;
    actualizarPuntajeDOM();

    if (secuenciaUsuario.length === secuenciaJuego.length) {
        bloqueado = true;
        setTimeout(siguienteNivel, 1000);
    }
}

function perderJuego() {
    spanPuntajeFinal.textContent = puntaje;
    modalGameOver.classList.remove('oculto');
}

function iniciarJuego() {
    var nombre = inputNombreInicio.value;

    if (nombre.length < 3) {
        mensajeErrorInicio.classList.remove('oculto');
        return;
    }

    nombreUsuario = nombre;
    spanNombreJugador.textContent = nombreUsuario;
    mensajeErrorInicio.classList.add('oculto');

    seccionInicio.classList.add('oculto');
    seccionJuego.classList.remove('oculto');

    reiniciarVariables();
    setTimeout(siguienteNivel, 1000);
}

function reiniciarJuegoDesdeModal() {
    modalGameOver.classList.add('oculto');
    seccionJuego.classList.add('oculto');
    seccionInicio.classList.remove('oculto');
    inputNombreInicio.value = '';
}

function inicializarEventos() {
    btnJugar.addEventListener('click', iniciarJuego);
    btnReiniciar.addEventListener('click', reiniciarJuegoDesdeModal);

    var contenedorTablero = document.querySelector('.tablero-simon');
    contenedorTablero.addEventListener('click', procesarClickUsuario);
}

function inicializarDOM() {
    seccionInicio = document.getElementById('seccion-inicio');
    seccionJuego = document.getElementById('seccion-juego');
    modalGameOver = document.getElementById('modal-game-over');
    
    inputNombreInicio = document.getElementById('input-nombre');
    btnJugar = document.getElementById('boton-jugar');
    btnReiniciar = document.getElementById('boton-reiniciar');
    mensajeErrorInicio = document.getElementById('mensaje-error-inicio');
    
    spanNombreJugador = document.getElementById('nombre-jugador');
    spanPuntaje = document.getElementById('valor-puntaje');
    spanPuntajeFinal = document.getElementById('puntaje-final');
    spanNivel = document.getElementById('valor-nivel');

    botonesColores.verde = document.getElementById('verde');
    botonesColores.rojo = document.getElementById('rojo');
    botonesColores.amarillo = document.getElementById('amarillo');
    botonesColores.azul = document.getElementById('azul');

    inicializarEventos();
}

window.addEventListener('load', inicializarDOM);