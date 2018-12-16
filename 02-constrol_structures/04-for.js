var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
    peso: 80
}
console.log(`Àl inicio del año, ${rafael.nombre} pesa ${rafael.peso}KG`)

const INCREMENTO_PESO = 0.2
const dias = 365

const aumentarDePeso = perosna => perosna.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= dias; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(rafael)
    } else if (random < 0.5) {
        adelgazar(rafael)
    }
}

console.log(`Àl final del año, ${rafael.nombre} pesa ${rafael.peso.toFixed(2)}KG`)