var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 20,
}

const OVER_AGE = 18

// Solo si hace un return
const isOverAge = ({age}) => age >= OVER_AGE
const isUnderAge = ({age}) => !isOverAge({age})

function printIfIsOverAge(person) {
    if (isOverAge(person)) {
        console.log(`${person.firstName} es mayor de edad.`)
    } else {
        console.log(`${person.firstName} aún no es mayor de edad.`)
    }
}

function challenge(person) {
    if (isUnderAge(person)) {
        console.log(`${person.firstName} es menor de edad`)
    } else {
        console.log(`${person.firstName} es mayor de edad`)
    }
} 

function allowAccess(person) {
    if (!isOverAge(person)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log(`${person.firstName} puede pasar`)
    }
}

printIfIsOverAge(person1)
challenge(person1)
allowAccess(person1)