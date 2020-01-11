
// function suma (...numbers){
//   console.log(numbers)
// }
// suma (46,32455,125,7)

// function suma (...numbers) {
//   let acum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     acum += numbers[i]
//   }
//   return acum
// }
// suma(46, 32455, 125, 7)

// function suma (...numbers) {
//   return numbers.reduce(function (acum, numero) {
//     acum += numero
//     return acum
//   }, 0)
// }
// suma(46, 32455, 125, 7)

// function dobles (...numeros) {
//   const resultado = []
//   for (let i = 0; i < numeros.length; i++) {
//     resultado.push(numeros[i] * 2)
//   }
//   return resultado
// }
// dobles(2, 98, 4, 6)

// function dobles (...numeros) {
//   return numeros.map(function (numero) {
//     return numero * 2
//   })
// }
// dobles(2, 98, 4, 6)

// function dobles (...numeros) {
//   return numeros.map(numero => nuemro * 2)
// }
// dobles(2, 98, 4, 6)

// const dobles = (...numeros) => numeros.map(numero => numero * 2)
// dobles(2, 98, 4, 6)

// function pares (...numeros) {
//   const resultado = []
//   const length = numeros.length
//   for (let i = 0; i < length; i++) {
//     const numero = numeros[i]
//     if (numero % 2 == 0) {
//       resultado.push(numero)
//     }
//   }
//   return resultado
// }
// pares(15, 164, 51343546, 34736)

// function pares (...numeros) {
//   numeros.filter(function (numero) {
//     return numero % 2 == 0
//   })
// }
// pares(15, 164, 51343546, 34736)

// const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
// pares(15, 164, 51343546, 34736)
