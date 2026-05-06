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
  clear();

  let imgRatio = bgImage.width / bgImage.height;
  let canvasRatio = width / height;

  let drawWidth, drawHeight;

  if (canvasRatio > imgRatio) {
    // canvas is wider → match width
    drawWidth = width;
    drawHeight = width / imgRatio;
  } else {
    // canvas is taller → match height
    drawHeight = height;
    drawWidth = height * imgRatio;
  }

  image(
    bgImage,
    (width - drawWidth) / 2,
    (height - drawHeight) / 2,
    drawWidth,
    drawHeight
  );
}

function windowResized() {
  let hero = document.getElementById('hero-canvas');
  resizeCanvas(hero.offsetWidth, hero.offsetHeight);
}