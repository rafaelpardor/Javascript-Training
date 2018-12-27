
function saludarFamilia (apellido) {
  return function saludarMiembro (nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

saludarGomez('Rafael')
saludarPerez('AFSDF')
