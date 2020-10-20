const names = [
  { name: 'name', age: 1 },
  { name: 'name', age: 2 },
];
console.log(names);

names.map(function (e) {
  console.log(e.name);
});

names.map(e => console.log(e.name));

const square = sum => sum * sum;
console.log(square(2));
