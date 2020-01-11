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

function cumpleanios(persona){
    return {
        ...persona,
        edad:persona.edad+1
    }
}