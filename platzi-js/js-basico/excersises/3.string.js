function platzom(str) {

  let translation = str

  const reverse = (str) => str.split('').reverse().join('')

  let minMay = (str) => {
    const length = str.length

    let transtation = ''
    let capitalize = true

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUppercase() : char.toLowerCase
    }

    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondtHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondtHalf}`
  }

  return translation
}

console.log(platzom('programar'))
console.log(platzom('zorro'))
console.log(platzom('zazarar'))
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))
console.log(platzom('anananana'))

// ##############################
// STRINGS
// 0 = R
// 1 = A
// 2 = F
// 3 = A
// 4 = E
// 5 = L

// ##############################
// Concatenar
// const nombre = 'Hola' + ' xD'
// console.log(nombre)

// str.toUpperCase() // convierte el texto a mayúscula
// str.toLowerCase() // convierte el texto en minúsculas
// str.endsWith(\'\') // evalúa si el string termina con un texto
// str.startsWith(\'\') // evalúa si un string comienza con un texto
// str.slice(inicio, final) // partir un carácter
// str.length // cuantos caracteres tiene el string