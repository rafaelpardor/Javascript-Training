let person = {
  'name': 'name',
  'age': 1,
  'country': 'USA'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['person1', 'person2', 'person3'];
let team2 = ['person1', 'person2', 'person3'];

let Team = [...team1, ...team2];

console.log(Team)

