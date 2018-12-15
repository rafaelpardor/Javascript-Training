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

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { apellido } = persona
    var { edad } = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años.`)
}

imprimirNombreEnMayusculas(rafael)
imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas({ nombre: 'Rafa' })
imprimirNombreYEdad(rafael)
imprimirNombreYEdad(juan)
imprimirNombreYEdad({ 
    nombre: 'Harry',
    apellido: 'Potter',
    edad: '12'
})