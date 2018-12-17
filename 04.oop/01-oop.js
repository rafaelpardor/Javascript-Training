function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me  llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.saberAltura = function () {
    if (this.altura >= 1.80) {
        console.log(`Soy alto porque mido ${this.altura}`)
    } else {
        console.log(`Soy bajo porque mido ${this.altura}`)

    }
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var juan = new Persona('Juan', 'Pardo R.', 24, 1.74)
console.table(rafael)
console.table(juan)

rafael.saludar()
rafael.saberAltura()
juan.saludar()
juan.saberAltura()