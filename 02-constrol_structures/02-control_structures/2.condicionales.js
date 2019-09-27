const starWars = "Star Wars: El despertar de la fuerza";
const pgStarWars7 = 13;

const nameRafael = "Rafael";
const nameSanti = "Santi";

const ageRafael = 26;
let ageSanti = 12;

function canWatchSW7(name, age, whitAdult = false) {
  if (age >= pgStarWars7) {
    console.log(`${name} puede pasar a ver ${starWars}`);
  } else if (whitAdult) {
    console.log(`${name} puede pasar a ver ${starWars}.`);
    console.log(`Aunque su edad es ${age}, se encuentra acompañado.`);
  } else {
    console.log(`${name} no puede pasar a ver ${starWars}.`);
  }
}

canWatchSW7(nameRafael, ageRafael);
canWatchSW7(nameSanti, ageSanti, true);
