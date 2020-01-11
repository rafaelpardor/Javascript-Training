var counter = 0

const rain = () => Math.random() < 0.25

do {
    counter++
} while (!rain())

console.log(`Fui a ver si llovia ${counter} ${counter==1?"vez":"veces"}.`)