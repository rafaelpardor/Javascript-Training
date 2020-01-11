var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 20,
    weight: 70
}
console.log(`Àl inicio del año, ${person1.firstName} pesa ${person1.weight}KG`)

const INCREASED_WEIGHT = 0.2
const DAYS = 365

const augmentWeight = person => person.weight += INCREASED_WEIGHT
const reduce = person => person.weight -= INCREASED_WEIGHT

for (var i = 1; i <= DAYS; i++) {
    var random = Math.random()

    if (random < 0.25) {
        augmentWeight(person1)
    } else if (random < 0.5) {
        reduce(person1)
    }
}

console.log(`Àl final del año, ${person1.firstName} pesa ${person1.weight.toFixed(2)}KG`)