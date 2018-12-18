// Clase para crear una persona
class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }
    // Function como parametro opcional
    saludar(fn) {
        var {nombre,apellido}=this
        // var nombre = this.nombre
        // var apellido = this.apellido
        console.log(`Hola, me  llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
        if (fn) {
            fn(nombre,apellido)
        }
    }
    saberAltura() {
        console.log(this.altura >= 1.80)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, altura) {
        super(nombre, apellido, edad, altura)
    }
    saludar(fn) {
        var {nombre,apellido} = this
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador.`)
        if (fn) {
            fn(nombre, apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Que bueno, ${nombre}, eres desarollador`)
    }
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var martha = new Persona('Martha', 'Rodriguez Mozo', 49, 1.65)
var juan = new Desarrollador('Juan', 'Pardo R.', 24, 1.84)
console.log(rafael)
console.log(martha)
console.log(juan)

rafael.saludar()
martha.saludar()
juan.saludar(responderSaludo)