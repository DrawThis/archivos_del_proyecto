const rombo = document.getElementById('rombo-1');
const circle1 = document.getElementById('circle-1');
const square = document.getElementById('square-1');
const circle2 = document.getElementById('circle-2');
const circle3 = document.getElementById('circle-3');
const circle4 = document.getElementById('circle-4');
const circle5 = document.getElementById('circle-5');
const circle6 = document.getElementById('circle-6');
const circle7 = document.getElementById('circle-7');
const circle8 = document.getElementById('circle-8');
const levelInfo = document.getElementById('level-info');

const elements = [
  { element: rombo, text: '1. Video: Introducción a la Historia del Arte' },
  { element: circle1, text: '2. Desarrollo: El Arte Prehistórico' },
  { element: square, text: '3. Desafío: Realización de Arte Prehistórico' },
  { element: circle2, text: '4. Arte' },
  { element: circle3, text: 'Control de Flujo' },
  { element: circle4, text: 'Funciones' },
  { element: circle5, text: 'Arreglos y Objetos' },
  { element: circle6, text: 'Bucles y Condicionales' },
  { element: circle7, text: 'Funciones Avanzadas' },
  { element: circle8, text: 'Proyecto Final' },
];

elements.forEach(({ element, text }) => {
  element.addEventListener('mouseover', () => {
    levelInfo.textContent = text;
    levelInfo.classList.add('show');
  });

  element.addEventListener('mouseout', () => {
    levelInfo.classList.remove('show');
  });
});

document.getElementById('menuToggle').addEventListener('click', function() {
  var sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('open');
  this.classList.toggle('open');
});
