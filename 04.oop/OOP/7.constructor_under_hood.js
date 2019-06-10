function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  this.logIn = function() {
    console.log(`${this.email} has logged in.`);
  };
}

var userOne = new User("Rafael", "rafael@gmial.com");
var userTwo = new User("Jose", "jose@gmail.com");

console.log(userOne);
userTwo.logIn();
