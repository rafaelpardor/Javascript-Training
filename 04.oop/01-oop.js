function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me  llamo ${this.nombre} ${this.apellido}`)
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var juan = new Persona('Juan', 'Pardo R.', 24, 1.74)
console.table(rafael)
console.table(juan)

rafael.saludar()
juan.saludar()