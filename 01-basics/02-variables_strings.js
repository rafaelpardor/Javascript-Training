console.log("Utilizando y manipulando strings. \n")

var nombre = "Rafael";
var apellido = "Pardo";
console.log(nombre);
console.log(apellido);

var nombreComleto = `${nombre} ${apellido}`;
console.log(`Nombre y apellido: ${nombreComleto}`);

var lengthNombre = nombre.length;
var lengthNombreCompleto = nombreComleto.length;
console.log(`Largo del nombre: ${lengthNombre}`);
console.log(`Largo de nombre completo: ${lengthNombreCompleto}`);

var primeraLetraDeNombre = nombre.charAt(0);
var ultimaLetraDeNombre = nombre.charAt(nombre.length - 1);
console.log(`Primera letra del nombre: ${primeraLetraDeNombre}`);
console.log(`Ultima letra del nombre: ${ultimaLetraDeNombre}`);

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
console.log(
  `Nombre y apellidos modificados: ${nombreEnMayusculas} ${apellidoEnMinusculas}`
);

var str = nombreComleto.substr(0, 6);
console.log(`String manipulado: ${str}`);
