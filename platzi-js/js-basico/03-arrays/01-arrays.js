var rafael = {
  firstName: "Rafael",
  lastName: "Pardo Rodriguez",
  height: 1.8,
  booksAmmount: 123
};
var juan = {
  firstName: "Juan",
  lastName: "Pardo Rodriguez",
  height: 1.75,
  booksAmmount: 43
};
var martha = {
  firstName: "Martha",
  lastName: "Rodriguez Mozo",
  height: 1.65,
  booksAmmount: 432
};
let alejandro = {
  firstName: "Alejandro",
  lastName: "Pardo Chávez",
  height: 1.67,
  booksAmmount: 53
};
// var persons = new Array(rafael, juan, martha, alejandro);
// var persons = Array(rafael, juan, martha, alejandro);
var persons = [rafael, juan, martha, alejandro];

console.log(persons[0]);
console.log(persons[0]["firstName"]);
for (var i = 0; i < persons.length; i++) {
  var person = persons[i];
  console.log(`${person.firstName} tiene ${person.booksAmmount} libros.`);
}
console.table(persons);

const reducer = (acum, { booksAmmount }) => acum + booksAmmount;

let totalDeLibros = persons.reduce(reducer, 0);

console.log(`Entre todos tienen ${totalDeLibros}. libros`);
