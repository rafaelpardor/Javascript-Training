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


// Creamos un nuevo objeto, logramos que no afecte objetos ya creados
function cumpleaños1(persona) {
    return{
        ...persona,
        edad: persona.edad+1
    }
}

console.log(cumpleaños1(rafael))
console.log(rafael)