var canvas
var h1
var x = 100
var y = 100

function setup() {
  canvas = createCanvas(400, 200)
  canvas.position(600, 100)

  h1 = createElement('h1', 'Waiting')
  // h1.position(400,600)
}

function mousePressed() {
  h1.html('Now I will show my favorite number.')
  createP('Hola we ' + random(0, 10))
}

function draw() {
  background(200)
  fill(255, 0, 0)
  rect(x, y, 50, 50)
  h1.position(x, y)

  x = x + random(-5, 5)
}