class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    logIn(){
        console.log(this.email, 'Just logged in.');
    }
    logOut(){
        console.log(this.email, 'Just logged out.');
    }
}

var userOne = new User('Rafael', 'rafael@gmial.com')
console.log(userOne);
userOne.logIn()