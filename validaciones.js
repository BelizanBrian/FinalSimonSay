'use strict';

var Validaciones = (function() {
    
    function esNombreValido(nombre) {
        var regexAlfanumerico = /^[a-zA-Z0-9\s]+$/;
        return nombre && nombre.length >= 3 && regexAlfanumerico.test(nombre);
    }

    function esEmailValido(email) {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function esMensajeValido(mensaje) {
        return mensaje && mensaje.length > 5;
    }

    return {
        esNombreValido: esNombreValido,
        esEmailValido: esEmailValido,
        esMensajeValido: esMensajeValido
    };
})();