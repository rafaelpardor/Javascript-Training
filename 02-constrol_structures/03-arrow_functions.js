var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
}

const MAYORIA_DE_EDAD = 18

// Solo si hace un return
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} aún no es mayor de edad.`)
    }
}

imprimirSiEsMayorDeEdad(rafael)