function User(name, email) {
    this.name = name
    this.email = email
    this.online = false
}

User.prototype.logIn = function () {
    this.online = true
    console.log(`${this.email} has logged in.`)
}
User.prototype.logOut = function () {
    this.online = false
    console.log(`${this.email} has logged out`)
}

var userOne = new User('Rafael', 'rafael@gmial.com')
var userTwo = new User('Jose', 'jose@gmail.com')

console.log(userOne);
userTwo.logIn()