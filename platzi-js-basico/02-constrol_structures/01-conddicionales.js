var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
    programador: true,
    drone: false,
    cocinero: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.programador) {
        console.log('Programador')
    }
    if (persona.drone) {
        console.log('Sabe manejar drones,')
    } else {
        console.log('No sabe manejar drones')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
}

function esMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} aún no es mayor de edad.`)
    }
}

imprimirProfesiones(rafael)
esMayorDeEdad(rafael)