class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

let userOne = new User("Rafael1", "rafael1@gmial.com");
let userTwo = new User("Rafael2", "rafael2@gmail.com");
let userThree = new User();
userThree.name = "Rafael3";
userThree.email = "rafael3@gmail.com";

console.log(userOne);
console.log(userTwo);
console.log(userThree);

