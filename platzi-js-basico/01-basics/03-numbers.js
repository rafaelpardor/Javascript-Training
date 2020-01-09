var edad = 21;
edad += 1;
console.log("Mi edad + 1:",edad);

var peso = 80;
peso -= 10;
console.log("mi peso:",peso,"kg");

var sandwich = 4;
console.log("Mi peso despues de comer sandwich",peso + sandwich,"kg");

var jugarFutbol = 8;
console.log("Mi peso despues de jugar futbol",peso - jugarFutbol,"kg");

var precioDeVino = 200.3;
console.log("Precio del vino:",precioDeVino);

var total = parseFloat((precioDeVino * 3).toFixed(2));
console.log("Precio de tres vinos:",total);

var pizza = 12
var personas = 4
var cantidadDePorcionesPorPersona = pizza / personas
console.log("Cantidad de pizzas que pueden comer 4 personas:",cantidadDePorcionesPorPersona,"pedazos");