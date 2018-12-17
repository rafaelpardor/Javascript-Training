function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

// Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
Persona.prototype.saludar = function () {
    console.log(`Hola, me  llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.saberAltura = function () {
    return this.altura >= 1.80
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var juan = new Persona('Juan', 'Pardo R.', 24, 1.74)
console.log(rafael)
console.log(juan)

rafael.saludar()
console.log(rafael.saberAltura())
juan.saludar()
console.log(juan.saberAltura())