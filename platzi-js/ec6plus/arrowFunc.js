const names = [
  {name: 'name', age: 1},
  {name: 'name', age: 2}
]

let listOfNames = names.map(function (item){
  console.log(item.name);
});

let arrowListNames = names.map(item => console.log(item.name));

const square = sum => sum * sum;

