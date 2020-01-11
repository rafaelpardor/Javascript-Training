// Calcular el número de días transcurridos desde mi nacimeinto

const miNacimiento = new Date(1998, 9, 22)

// muestro la fecha de mi miNacimiento
console.log(`La fecha de mi nacimiento es: ${miNacimiento}`);

// La fecha de hoy
const hoy = new Date()
// mostramos la fecha actual
console.log(`La fecha actual es:
  ${hoy}`);

// milisegundos transcurridos desde mi miNacimiento
const timeMiliseg = hoy - miNacimiento
// mostramos el tiempo transcurrido en milisegundos
console.log(`Nací hace ya ${timeMiliseg} milisegundos`);

// segundos transcurridos desde miNacimiento
const timeSec = timeMiliseg / 1000
// minutos transcurridos desde miNacimiento
const timeMin = timeSec / 60
// horas transcurridas desde mi miNacimiento
const timeHoras = timeMin / 60

// mostramos el tiempo transcurrido desde miNacimiento
// en segundos, minutos y también en horas.
console.log(`Desde que nací hasta ahora han pasado:
  ${timeSec} segundos, o también podríamos decir que han pasado
  ${timeMin} minutos, o si lo prefieres en horas serían
  ${timeHoras} horas.`);