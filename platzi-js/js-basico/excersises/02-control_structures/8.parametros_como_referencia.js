var sacha = {
    nombre: 'Rafael',
    apellido: 'Pardo',
    edad: 32
}

var martha = {
    nombre: 'Martha',
    apellido: 'Mozo',
    edad: 54
}

function imprimirNombreMayus(persona) {
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(sacha)
imprimirNombreMayus(martha)

function cumpleaños(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}
