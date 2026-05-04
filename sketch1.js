let bgImage;
let canvas;

function preload() {
  bgImage = loadImage('imgs/header2.gif');
}

function setup() {
  let hero = document.getElementById('hero-canvas');

  canvas = createCanvas(hero.offsetWidth, hero.offsetHeight);
  canvas.parent('hero-canvas');

  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '0');
}

function draw() {
  image(bgImage, 0, 0, width, height);
}

function windowResized() {
  let hero = document.getElementById('hero-canvas');
  resizeCanvas(hero.offsetWidth, hero.offsetHeight);
}