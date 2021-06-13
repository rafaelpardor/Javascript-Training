let prop = "name";
prop = "email";

var userOne = {
  name: "Rafael",
  email: "user@mail.com",
  logIn() {
    console.log(this.email, "Has logged in");
  },
  logOut() {
    console.log(this.email, "Has logged out");
  }
};
console.log(userOne);

//
userOne.name = "Mario";
console.log(userOne.name);

// Dyamic property access
userOne["name"] = "Yoshi";
console.log(userOne["email"]);
console.log(userOne["name"]);
userOne[prop];

userOne.age = 23;
userOne.logInfo = function() {};

