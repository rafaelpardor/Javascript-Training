var person1 = {
    name: 'Rafael'
}

var anotherPerson1 = {
    name: 'Rafael'
}

var anotherPerson = {
    ...anotherPerson1
}

console.log(person1 == anotherPerson1)
console.log(person1.name == anotherPerson1.name)
console.log(anotherPerson == person1)
console.log(anotherPerson == anotherPerson1)