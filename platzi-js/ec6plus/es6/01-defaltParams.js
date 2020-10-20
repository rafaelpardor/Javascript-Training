function oldFunction(name, age, country) {
  var name = name || 'Default';
  var age = age || 0;
  var country = country || 'ISO';
  console.log(name, age, country);
}

// es6
function newFunction(name = 'Default', age = 0, country = 'ISO') {
  console.log(name, age, country);
}

function main() {
  oldDefault = oldFunction();
  oldOptional = oldFunction('Rafael', 1, 'NN');
  newDefault = newFunction();
  newOptional = oldFunction('Name', 1, 'NN');
}

main();
