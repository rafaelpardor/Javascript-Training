class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  logIn() {
    console.log(this.email, "Just logged in.");
    return this;
  }
  logOut() {
    console.log(this.email, "Just logged out.");
  }
}

let userOne = new User("Rafael", "rafael@gmial.com");

console.log(userOne);
userOne.logIn();

