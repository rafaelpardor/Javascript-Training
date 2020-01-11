var x = 4, y = '4'
console.log(x == y);
console.log(x === y);

var rafael = {
    nombre: 'Rafael',
}

var apuntador = rafael

var otroMenconelmismoNombre = {
    ...rafael,
}

console.log(rafael);
console.log(otroMenconelmismoNombre);
