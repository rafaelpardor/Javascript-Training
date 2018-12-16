var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    altura: 1.80,
    cantidadDeLibros: 123
}
var juan = {
    nombre: 'Juan',
    apellido: 'Pardo Rodriguez',
    altura: 1.75,
    cantidadDeLibros: 43
}
var martha = {
    nombre: 'Martha',
    apellido: 'Rodriguez Mozo',
    altura: 1.65,
    cantidadDeLibros: 432
}
var alejandro = {
    nombre: 'Alejandro',
    apellido: 'Pardo Chávez',
    altura: 1.67,
    cantidadDeLibros: 53
}
var personas = [rafael, juan, martha, alejandro]
console.table(personas)

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`Entre todos tienen ${totalDeLibros}.`)