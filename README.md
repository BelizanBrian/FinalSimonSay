# FinalSimonSay
Trabajo práctico para Final de Introducción a la Programación Web - UAI Rosario
Alumno: Brian Belizan

# Simón Dice - Juego de Memoria Web

Proyecto final para la materia IPW. Es una implementación del clásico juego de memoria "Simón Dice", desarrollado bajo estándares estrictos de programación web (HTML5, CSS3 y JavaScript ES5).

##  Instrucciones de Juego

El objetivo del juego es memorizar y repetir una secuencia de colores y sonidos que se hace progresivamente más larga.

1.  **Inicio:** Ingresa tu nombre en la pantalla de bienvenida (debe tener al menos 3 caracteres) y presiona "Comenzar Partida".
2.  **Observa:** El juego iluminará un color en el tablero.
3.  **Repite:** Haz clic en el color que se acaba de iluminar.
4.  **Avanza:**
    * Si aciertas, ganas puntos y pasas al siguiente nivel.
    * En el siguiente nivel, se agrega un nuevo color a la secuencia anterior.
5.  **Puntaje:**
    * Sumas 1 punto por cada color presionado correctamente.
    * El nivel indica la longitud actual de la secuencia.
6.  **Fin del Juego:** Si te equivocas en el orden, perderás la partida y aparecerá un resumen con tu puntaje final. Podrás reiniciar el juego desde ahí.

## Detalles del Desarrollo

Este proyecto fue construido siguiendo una arquitectura limpia y sin dependencias externas (Vanilla JS), respetando las siguientes pautas técnicas:

### Tecnologías Utilizadas
* **HTML5:** Estructura semántica (uso de `<header>`, `<main>`, `<section>`, `<footer>`) sin estilos ni scripts en línea.
* **CSS3:**
    * Diseño Responsivo.
    * Uso exclusivo de **Flexbox** para la maquetación.
    * Normalización de estilos mediante `reset.css`.
    * Orden estricto de propiedades CSS dentro de las reglas.
* **JavaScript (ES5):**
    * Uso de `'use strict'` para garantizar código seguro.
    * Ausencia total de sintaxis ES6 (no se usan `let`, `const` ni arrow functions).
    * Manipulación del DOM mediante `addEventListener`.
    * Lógica separada en funciones nominadas y organizadas.
* **Git:** Historial de commits descriptivos y atómicos.

### Estructura de Archivos
El proyecto mantiene una separación de responsabilidades (SoC):
* `/css`: Contiene la hoja de estilos principal y el reset.
* `/js`: Contiene la lógica del juego (`juego.js`) y las validaciones de contacto (`contacto.js`, `validaciones.js`).
* `/index.html` y `/contacto.html`: Vistas principales.