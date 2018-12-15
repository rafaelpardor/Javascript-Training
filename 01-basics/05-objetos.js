var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
}

var juan = {
    nombre: 'Juan',
    apellido: 'Pardo Rodriguez',
    edad: 24,
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(rafael)
imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas({ nombre: 'Rafa' })

// Javascript se comporta diferente con los objetos.
// el valor de edad en el objeto va a ser modificado
function cumpleaños(persona) {
    persona.edad += 1
}