var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo',
    edad: 12
}

var martha = {
    nombre: 'Martha',
    apellido: 'Rodriguez',
    edad: 50
}

function imprimirNombreEnMayusculas({ nombre
}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(rafael)
imprimirNombreEnMayusculas(martha)
imprimirNombreEnMayusculas({
    nombre: 'Pepito'
})