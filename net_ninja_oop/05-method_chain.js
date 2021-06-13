class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  logIn() {
    console.log(this.email, "Just logged in.");
    return this;
  }
  logOut() {
    console.log(this.email, "Just logged out.");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, " score is now ", this.score);
    return this;
  }
}

let userOne = new User("Rafael", "rafael@gmial.com");
console.log(userOne);
userOne
  .logIn()
  .updateScore()
  .logOut();

