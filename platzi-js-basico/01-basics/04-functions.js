var nombre = 'Rafael';
console.log(nombre);

// Funcion con alcanze local
function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log("Variable modificada con la funcion",nombre);
}

imprimirNombreEnMayusculas(nombre);
console.log("Variable global no modificada:",nombre);
