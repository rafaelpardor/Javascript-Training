var nombre = "Rafael";
console.log(nombre);

// Funcion con alcanze local
function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

console.log(nombre);
imprimirNombreEnMayusculas(nombre);
