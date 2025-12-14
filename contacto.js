'use strict';

var btnEnviar;
var inputNombre;
var inputEmail;
var inputMensaje;
var pFeedback;

function enviarFormulario() {
    var nombre = inputNombre.value;
    var email = inputEmail.value;
    var mensaje = inputMensaje.value;
    var asunto = 'Contacto desde Simon Dice: ' + nombre;
    var cuerpo = 'Nombre: ' + nombre + '\nEmail: ' + email + '\n\nMensaje:\n' + mensaje;
    var linkMailto = 'mailto:destinatario@ejemplo.com?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);

    if (!Validaciones.esNombreValido(nombre)) {
        mostrarError('El nombre debe ser alfanumérico y tener al menos 3 caracteres.');
        return;
    }

    if (!Validaciones.esEmailValido(email)) {
        mostrarError('Ingrese un email válido.');
        return;
    }

    if (!Validaciones.esMensajeValido(mensaje)) {
        mostrarError('El mensaje debe tener más de 5 caracteres.');
        return;
    }

    window.location.href = linkMailto;
    mostrarExito('Abriendo cliente de correo...');
}

function mostrarError(mensaje) {
    pFeedback.textContent = mensaje;
    pFeedback.style.color = '#e74c3c';
    pFeedback.className = 'texto-error'; 
}

function mostrarExito(mensaje) {
    pFeedback.textContent = mensaje;
    pFeedback.style.color = '#27ae60';
    pFeedback.className = 'texto-error';
}

function inicializarEventos() {
    btnEnviar.addEventListener('click', enviarFormulario);
}

function inicializarDOM() {
    btnEnviar = document.getElementById('boton-enviar');
    inputNombre = document.getElementById('contacto-nombre');
    inputEmail = document.getElementById('contacto-email');
    inputMensaje = document.getElementById('contacto-mensaje');
    pFeedback = document.getElementById('mensaje-feedback');

    inicializarEventos();
}

window.addEventListener('load', inicializarDOM);