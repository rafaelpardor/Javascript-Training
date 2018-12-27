var rafael = {
    nombre: 'Rafael',
    apellido: 'Pardo R',
    edad: 19

}
var martha = {

    nombre: 'Martha',
    apellido: 'Rodriguez',
    edad: 49

}
console.log(rafael)
console.log(martha)


function imprimirNombreEnMayus(persona) {
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayus(rafael)
imprimirNombreEnMayus(martha)

function imprimirNombreYEdad(persona) {
    var {nombre,apellido, edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido}, y tengo ${edad} años.`)
}
imprimirNombreYEdad(rafael)
imprimirNombreYEdad(martha)