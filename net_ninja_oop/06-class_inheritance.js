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

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

let admin = new Admin("Luigui", "luigui@nintendo.com");
let userOne = new User("Rafael", "rafael@gmial.com");
let userTwo = new User("Jose", "jose@gmial.com");

let users = [admin, userOne, userTwo];

console.log(users)
admin.deleteUser(userTwo);
console.log(users);

