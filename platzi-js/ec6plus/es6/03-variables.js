const globalConst = 'Global Const'
var globalVar = 'Global Var';
let globalLet = 'Global let';

console.log(globalConst);
console.log(globalVar);
console.log(globalLet);

{
  let globalLet = '3';
  const globalConst = 'const'
  console.log(globalConst);  
  console.log(globalVar);
  console.log(globalLet);
}

console.log(globalLet);
