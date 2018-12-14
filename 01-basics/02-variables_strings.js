var nombre = 'Rafael',
    apellido = 'Pardo'
var nombreComleto = `${nombre} ${apellido}`
var lengthNombre = nombre.length
var primeraLetraDeNombre = nombre.charAt(0)
var ultimaLetraDeNombre = nombre.charAt(nombre.length - 1)
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var lengthNombreCompleto = nombreComleto.length
var str = nombreComleto.substr(0, 6)

console.log(nombre)
console.log(apellido)
console.log(`Largo del nombre: ${lengthNombre}`)
console.log(`Primera letra del nombre: ${primeraLetraDeNombre}`)
console.log(`Ultima letra del nombre: ${ultimaLetraDeNombre}`)
console.log(`Nombre y apellidos modificados: ${nombreEnMayusculas} ${apellidoEnMinusculas}`)
console.log(`Nombre y apellido: ${nombreComleto}`)
console.log(`Largo de nombre completo: ${lengthNombreCompleto}`)
console.log(`String manipulado: ${str}`)