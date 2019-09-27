var edad = 19
console.log(`Tu edad es ${edad}`)
edad++
console.log(`Tu edad en un año es ${edad}.\n`)

var peso = 78
console.log(`\nTu peso incial es ${peso}.\n`)
peso -= 8
console.log(`Ahora tu peso es ${peso}.\n`)

var lasagna = 20
peso += lasagna
console.log(`Te comiste una lasagna, ahora tu peso es ${peso}.\n`)

var jugarFutbol = 5
peso -= jugarFutbol
console.log(`Realizaste ejercicio, ahora tu peso es ${peso}.`)

var precioVino = 200.3
console.log(`Un vino vale ${precioVino} pesos.`)
var total1 = precioVino * 3
var total = Math.round(precioVino * 100 * 3) / 100
var totalStr = total.toFixed(2)
var strToInt = parseFloat(totalStr)
console.log(total1)
console.log(total)
console.log(totalStr)
console.log(strToInt)

var pizza = 24
var personas = 3
var cantidadDePorciones = (pizza / personas).toFixed(1)
console.log(`Las personas pueden comer ${cantidadDePorciones} porciones por persona.`)