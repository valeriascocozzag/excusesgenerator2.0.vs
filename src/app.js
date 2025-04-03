import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomArray(array) {
  let max = array.length;
  let position = Math.floor(Math.random() * max);
  return array[position];
}
window.onload = function () {
  let who = ['El perro', 'Mi vecina', 'El gato', 'Mi papá'];
  let action = ['se comió', 'botó', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'el teléfono', 'la taza de café', 'los lentes'];
  let when = ['antes de clases', 'mientras dormía', 'hace una semana', 'en el jardín'];
  let frase = getRandomArray(who) + ' ' + getRandomArray(action) + ' ' + getRandomArray(what) + ' ' + getRandomArray(when);
  document.getElementById("excuse").innerHTML = frase;
  document.getElementById("titulo").innerHTML = "Oh no! No sabes lo que pasó....";
  let coloresBonitos = ['#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8', '#EBDEF0', '#FFF9C4', '#E1F5FE'];
  document.getElementById("fondo").style.backgroundColor = getRandomArray(coloresBonitos);

};