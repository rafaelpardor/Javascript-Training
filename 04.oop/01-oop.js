// Clase para crear una persona
class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me  llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
    }
    saberAltura() {
        return this.altura >= 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido, edad, altura)
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador.`)
    }
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var juan = new Desarrollador('Juan', 'Pardo R.', 24, 1.84)
console.log(rafael)
console.log(juan)

rafael.saludar()
console.log(rafael.saberAltura())
juan.saludar()