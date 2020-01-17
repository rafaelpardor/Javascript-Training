function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.logIn = function() {
  this.online = true;
  console.log(`${this.email} has logged in.`);
};
User.prototype.logOut = function() {
  this.online = false;
  console.log(`${this.email} has logged out`);
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
  users = users.filter(user => {
    return user.email != u.email;
  });
};

var admin = new Admin("Luis", "luis@gmail.com");
var userOne = new User("Rafael", "rafael@gmial.com");
var userTwo = new User("Jose", "jose@gmail.com");

var users = [userOne, userTwo, admin];

console.log(admin);
