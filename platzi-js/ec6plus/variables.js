var globalVar = 'globalVar';
let globalLet = 'Global let';

console.log(globalVar);
console.log(globalLet);

{
  let globalLet = "3";
  console.log(globalVar);
  console.log(globalLet);
}

console.log(globalLet);
