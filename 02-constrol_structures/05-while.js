var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
    peso: 80
}
console.log(`${rafael.nombre} pesa ${rafael.peso}KG`)

const INCREMENTO_PESO = 0.3

const aumentarDePeso = perosna => perosna.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = rafael.peso - 3
var dias = 0
while (rafael.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarDePeso(rafael)
    }
    if (realizaDeporte()) {
        adelgazar(rafael)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta ${rafael.nombre} adelgazo 3KG`)
console.log(`${rafael.nombre} pesa ${rafael.peso.toFixed(2)}KG`)