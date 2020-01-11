
const nombre = 'Rafael'
const dias = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

function correr () {
  const min = 1
  const max = 3
  return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0
const length = dias.length

for (let i = 0; i < length; i++) {
  const kms = correr()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms}km's`)
}

const promedioKms = totalKms / length
console.log(`En total ${nombre} corrio ${totalKms} km's y en promedio, corrió ${promedioKms.toFixed(2)}km's`)
