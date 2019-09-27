console.log("Utilizando y manipulando numeros. \n");

var edad = 19;
console.log("edad: " + edad);
edad += 1; // edad + 1
console.log("edad + 1: " + edad);

var peso = 80;
console.log("peso: " + peso);
peso -= 10;
console.log("peso - 10: " + peso);

var sandwich = 4;
console.log(`El sandwich tiene un valor de ${sandwich}kg.`)
console.log(peso + sandwich);
console.log(``)

var jugarFutbol = 8;
console.log(peso - jugarFutbol);

var precioDeVino = 200.3;
console.log("El vinito vale: "+precioDeVino);

var total = parseFloat((precioDeVino * 3).toFixed(2));
console.log(total);

var pizza = 12;
var personas = 4;
var cantidadDePorcionesPorPersona = pizza / personas;
console.log(cantidadDePorcionesPorPersona);
