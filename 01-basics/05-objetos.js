var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo Rodriguez',
    edad: 20,
}
console.table(rafael)

var juan = {
    nombre: 'Juan',
    apellido: 'Pardo Rodriguez',
    edad: 24,
}

// Funcion con alcanze local
function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(rafael.nombre)
imprimirNombreEnMayusculas(juan.nombre)