let userOne = {
  email: "user@mail.com",
  name: "Rafael",
  login() {
    console.log(this.email, "Has logged in");
  },
  logout() {
    console.log(this.email, "Has logged out");
  }
};

console.log(userOne);
console.log(userOne.name);
userOne.login();
userOne.logout();

