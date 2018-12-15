var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
}

function esMayorDeEdad(persona) {
    return persona.edad >= 18
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} aún no es mayor de edad.`)
    }
}

imprimirSiEsMayorDeEdad(rafael)