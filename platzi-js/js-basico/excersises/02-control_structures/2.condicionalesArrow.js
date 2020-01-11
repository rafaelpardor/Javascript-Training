const nameMovie1 = 'Deadpool 2'
const pgMovie1 = 19

const nombrePersona1 = 'Rafael'
const nombrePersona2 = 'Valentina'
const nombrePersona3 = 'Sergio'

const agePersona1 = 19
const agePersona2 = 16
const agePersona3 = 10

let watchMovie = (name, age, adult = false) => {
  if (age >= pgMovie1) {
    console.log(`${name} puede pasar a ver ${nameMovie1}`)
  } else if (adult) {
    console.log(`${name} puede pasar a ver ${nameMovie1}.`)
    console.log(`Aunque su edad es ${age}, se encuentra acompañado.`)
  } else {
    console.log(`${name} no puede pasar a ver ${nameMovie1}.`)
  }
}

watchMovie(nombrePersona1, agePersona1)
watchMovie(nombrePersona2, agePersona2, true)
watchMovie(nombrePersona3, agePersona3)
