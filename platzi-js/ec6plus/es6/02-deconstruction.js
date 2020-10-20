let person = {
  name: 'Name',
  age: 0,
  country: 'ISO',
};

let { name, age, country } = person;
console.log(person.name, person.age);
console.log(name, age, country);

const team1 = ['person1', 'person2', 'person3'];
const team2 = ['person4', 'person5', 'person6'];

let Team = [...team1, ...team2];

console.log(Team);
