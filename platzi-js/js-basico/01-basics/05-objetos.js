var person1 = {
    firstName: 'Rafael',
    lastName: 'Pardo Rodriguez',
    age: 21,
}
console.log("Objeto person1 ->", person1);

var person2 = {
    firstName: 'Juan',
    lastName: 'Pardo Rodriguez',
    age: 25,
}
console.log("Objeto person2 ->", person2);

function imprimirNombreEnMayusculas(person) {
    // var nombre = persona.nombre
    var { firstName } = person;
    console.log(firstName.toUpperCase());
}

imprimirNombreEnMayusculas(person1);
imprimirNombreEnMayusculas(person2);
imprimirNombreEnMayusculas({ firstName: 'Linus' });


// Creamos un nuevo objeto, y copiamos un objeto ya creado
function birthday(person) {
    return{
        ...person,
        firstName: "Giotaro",
        age: person.age+1,
    }
}

// New person1
newPerson1 = birthday(person1);
console.log(birthday(newPerson1));
console.log("Person1 sigue sin ser modificado ->", person1);
