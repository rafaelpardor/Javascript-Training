var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    altura: 1.75
}
var juan = {
    nombre: 'Juan',
    apellido: 'Pardo Rodriguez',
    altura: 1.75
}
var martha = {
    nombre: 'Martha',
    apellido: 'Rodriguez Mozo',
    altura: 1.65
}
var alejandro = {
    nombre: 'Alejandro',
    apellido: 'Pardo Chávez',
    altura: 1.67
}

var personas = [rafael, juan, martha, alejandro]

console.table(personas)
console.log(personas.length)
console.log(personas[0]['nombre'])

for (let i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts.`)    
}