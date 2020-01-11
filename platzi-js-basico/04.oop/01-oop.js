// Clase para crear una persona
class Person {
  constructor(firstName, lastName, age, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
  }

  // Method
  greet() {
    console.log(
      `Hola, me  llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`
    );
  }

  knowHeight() {
    return this.height >= 1.8;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, age, height) {
    super(firstName, lastName, age, height);
  }
  greet() {
    console.log(
      `Hola, soy ${this.firstName} ${this.lastName} y soy desarrollador.`
    );
  }
}

// Se crea un nuevo objeto
var rafael = new Person("Rafael", "Pardo R.", 20, 1.75);
var juan = new Developer("Juan", "Pardo R.", 24, 1.84);
console.log(rafael);
console.log(juan);

rafael.greet();
console.log(rafael.knowHeight());
juan.greet();
