var name = 'Rafael', age = 21;
console.log(name, age);

// Funcion basica
function suma(number) {
	return number + number
}
console.log("Suma:",suma(10))

function greeting(name, age) {
	console.log(`${name} tiene ${age} anios`);
}
greeting(name, age);
greeting('Linux', 45);

// Funcion con alcanze local
function imprimirNombreEnMayusculas(name) {
    upperName = name.toUpperCase();
    console.log("Variable modificada con la funcion:", upperName);
}

imprimirNombreEnMayusculas('lucian');
imprimirNombreEnMayusculas(name);
console.log("Variable global no modificada:", name);
