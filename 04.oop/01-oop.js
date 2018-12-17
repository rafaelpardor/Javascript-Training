// Funcion para heredar
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

// Funcion para crear una persona
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
    return this.altura >= 1.80
}

// Funcion 'heredara' de persona
// para crear un desarrollador
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador.`)
}

// Se crea un nuevo objeto
var rafael = new Persona('Rafael', 'Pardo R.', 20, 1.80)
var juan = new Desarrollador('Juan', 'Pardo R.', 24, 1.84)
console.log(rafael)
console.log(juan)

rafael.saludar()
console.log(rafael.saberAltura())
juan.saludar()
console.log(juan.saberAltura())