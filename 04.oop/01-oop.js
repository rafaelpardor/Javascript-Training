function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me  llamo ${this.nombre} ${this.apellido}`)
}

// Es importante entender el scope de los prototypes
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