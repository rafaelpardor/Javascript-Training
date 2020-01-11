var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 20,
}

const OVER_AGE = 18

function isOverAge(person) {
    return person.age >= OVER_AGE
}

function printIfIsOverAge(person) {
    if (isOverAge(person)) {
        console.log(`${person.firstName} es mayor de edad.`)
    } else {
        console.log(`${person.firstName} aún no es mayor de edad.`)
    }
}

printIfIsOverAge(person1)