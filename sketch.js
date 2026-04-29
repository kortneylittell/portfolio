function setup() {
  let canvas = createCanvas(400, 200);
  canvas.parent(document.body);
}

function draw() {
  background(240);
  textAlign(CENTER, CENTER);
  text('Optional interactive element', width/2, height/2);
}