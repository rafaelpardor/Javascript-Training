var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 20,
    weight: 70
}
console.log(`${person1.firstName} pesa ${person1.weight}KG`)

const INCREASED_WEIGHT = 0.3

const augmentWeight = person => person.weight += INCREASED_WEIGHT
const reduce = person => person.weight -= INCREASED_WEIGHT
const eatALot = () => Math.random() < 0.3
const doSports = () => Math.random() < 0.4

const META = person1.weight - 3
var days = 0
while (person1.weight > META) {
    // debugger
    if (eatALot()) {
        augmentWeight(person1)
    }
    if (doSports()) {
        reduce(person1)
    }
    days += 1
}

console.log(`Pasaron ${days} días hasta ${person1.firstName} adelgazo 3KG`)
console.log(`${person1.firstName} pesa ${person1.weight.toFixed(2)}KG`)