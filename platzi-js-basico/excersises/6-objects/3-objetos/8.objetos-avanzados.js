
const p1 = {
  x: 0,
  y: 4,
  MoverEnX: function (x) { this.x += x },
  MoverEnY: function (y) { this.y += y }
}
const p2 = {
  x: 3,
  y: 0,
  MoverEnX: function (x) { this.x += x },
  MoverEnY: function (y) { this.y += y }
}

function distancia(p1,p2) {
  const x = p1.x - p2.y
  const y = p1.x - p2.y
  return Math.sqrt(x * x + y * y)
}
console.log(distancia(p1,p2))
console.log(distancia(p1,{x:20,y:1}))