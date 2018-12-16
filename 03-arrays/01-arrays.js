var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    altura: 1.80
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

const esAlta = ({altura}) => altura >= 1.80
const esBaja = ({altura}) => altura <= 1.70


console.table(personas)

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)