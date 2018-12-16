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

const pasarAlturasACms = persona => ({...persona, altura: persona.altura * 100})

console.table(personas)

// Devuelve un array nuevo
var personasCms = personas.map(pasarAlturasACms)

console.log(personasCms)