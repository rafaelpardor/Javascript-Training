var name = 'Rafael';
var age = 21;
console.log(name, age);

// Funcion basica
function sum(number) {
	return number + number
}
console.log("Suma:",sum(10))

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
