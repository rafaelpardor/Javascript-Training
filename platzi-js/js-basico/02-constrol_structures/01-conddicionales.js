var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 20,
    programmer: true,
    drone: false,
    coocker: true
}

function printProffessions(person) {
    console.log(`${person.firstName} es:`)

    if (person.programmer) {
        console.log('\tProgramador')
    }
    if (person.drone) {
        console.log('\tSabe manejar drones,')
    } else {
        console.log('\tNo sabe manejar drones')
    }
    if (person.coocker) {
        console.log('\tCocinero')
    }
}

function isOverAge(person) {
    if (person.age >= 18){
        console.log(`${person.firstName} es mayor de edad.`)
    } else {
        console.log(`${person.lastName} aún no es mayor de edad.`)
    }
}

printProffessions(person1)
isOverAge(person1)