var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 10,
}

const MAYORIA_DE_EDAD = 18

// Solo si hace un return
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`)
    } else if (esMenorDeEdad(persona)){
        console.log(`${persona.nombre} aún no es mayor de edad.`)
    }
}

function reto(persona){
    if (esMenorDeEdad(persona)) {
        console.log(`${persona.nombre} es menor de edad`)
    } else {
        console.log(`${persona.nombre} Es mayor de edad`)
    }
} 

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('Puede pasar')
    }
}

imprimirSiEsMayorDeEdad(rafael)
reto(rafael)
permitirAcceso(rafael)