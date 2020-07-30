function newFunction(name, age, country){
  var name = name || 'Rafael';
  var age = age || 21;
  var country = country || 'COL';
  console.log(name, age, country);
};

// es6
function newFunction2(name = 'Rafael', age = 21, country="COL"){
  console.log(name, age, country);
};

function main(){
  oldDefault = newFunction();
  oldOptional = newFunction("Nombre", 1, "JP");
  newDefault = newFunction2()
  newOptional = newFunction("Nombre", 1, "JP");
};

main();

