var personas = {
    rafael: {
        nombre: 'Rafael'
    },
    martha: {
        nombre: 'Martha'
    }
}
var persona1 = {
    nombre: 'Rafael',
    apellido: 'Pardo R.',
    edad: 19
}
var persona2 = {
    nombre: 'Martha',
    apellido: 'Rodriguez',
    edad: 49
}

console.log(personas.martha)
console.log(persona1)
console.log(persona2)

var miSuma = {
    n1: 5,
    n2: 10
}
console.log(miSuma)

var chat = {
    info: {
        mensaje: 'Algun mensaje',
        fechaMensaje: '20/10/2050',
        deUsuario: 'victor',
        aUsuario: 'SachaLifszyc'
    }
}
console.log(chat)

function imprimirNombreEnMayus({
    nombre
}) {
    console.log(nombre.toUpperCase())
}

function suma({
    n1,
    n2
}) {
    var operacion = n1 + n2
    console.log(operacion)
}

imprimirNombreEnMayus(persona1)
imprimirNombreEnMayus(persona2)
imprimirNombreEnMayus({
    nombre: 'Sergio'
})
suma(miSuma)
suma({
    n1: 100,
    n2: 100 + 50
})
suma({
    n1: 100 - 1,
    n2: (200 * 2) + 1
})