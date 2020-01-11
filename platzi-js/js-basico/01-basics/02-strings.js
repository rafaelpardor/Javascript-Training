var firstName = "Rafael",
  lastName = "Pardo";

var fullName = `${firstName} ${lastName}`;
console.log(`Nombre y apellido: ${fullName}`);

var upperCaseLastName = firstName.toUpperCase();
var lowerCaseLastName = lastName.toLowerCase();
console.log(
  `Nombre y apellidos modificados: ${upperCaseLastName} ${lowerCaseLastName}`
);

var str = fullName.substr(3, 7);
console.log(`String manipulado: ${str}`);

var firstNameLength = firstName.length;
var lengthNombreCompleto = fullName.length;
console.log(`Largo del nombre: ${firstNameLength}`);
console.log(`Largo de nombre completo: ${lengthNombreCompleto}`);

var firstLetterName = firstName.charAt(0);
var lastLetterName = firstName.charAt(firstName.length - 1);
console.log(`Primera letra del nombre: ${firstLetterName}`);
console.log(`Ultima letra del nombre: ${lastLetterName}`);
