let gokuVida = 100
let supermanVida = 100

const min_Pow = 1
const max_Pow = 20

const ambosSiguenVivos = () => gokuVida > 0 && supermanVida > 0

const calcularGolpe = () => Math.round(Math.random() * (max_Pow - min_Pow) + min_Pow)
const gokuSigueVivo = () => gokuVida > 0

let round = 0

while (ambosSiguenVivos()) {
  round++
  console.log(`Round ${round}`)
  
  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()
  
  if (golpeGoku > golpeSuperman) {
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
    supermanVida -= golpeGoku
    console.log(`Superman queda en ${supermanVida} de vida`)
    console.log(``)
  } else {
    console.log(`Supeman ataca a Goku con un golpe de ${golpeSuperman}`)
    gokuVida -= golpeSuperman
    console.log(`Goku queda en ${gokuVida} de vida`)
    console.log(``)
  }
}

if (gokuSigueVivo()) {
  console.log(`Goku gano la pelea. Su vida es de : ${gokuVida}`)
} else {
  console.log(`Superman gano la pelea. Su vida es de ${supermanVida}`)
}
