class Animal {
  constructor(owner, type, kind, name, feets) {
    this.owner = owner;
    this.type = type;
    this.kind = kind;
    this.name = name;
    this.feets = feets;
    this.ammout = 0;
  }
  logIn() {
    console.log(`${this.owner} dejo a ${this.name} en la veterinaria.`);
    return this;
  }
  logOut() {
    console.log(`${this.owner} recogió a ${this.name} en la veterinaria.`);
    return this;
  }
  updateAmmout() {
    this.ammout++;
    if (this.ammout == 1) {
      console.log(
        `Es la primera vez que ${this.owner} deja a ${
          this.name
        } en la veterinaria.`
      );
    } else {
      console.log(
        `${this.owner} volvió a dejar a ${this.name} en la veterinaria.`
      );
    }
    return this;
  }
}

let dueño = "owner";
let type = "tipo";
let raza = "kind";
let feets = "pies";

let perro1 = new Animal("Rafael", "Perro", "Golden Retriver", "Pecas", "4");

console.log(perro1);
console.log(
  `${perro1[dueño]} es el dueño de ${perro1[dueño]}, de raza ${perro1[raza]}`
);

perro1
  .logIn()
  .updateAmmout()
  .logOut();
console.log("");
perro1
  .logIn()
  .updateAmmout()
  .logOut();

