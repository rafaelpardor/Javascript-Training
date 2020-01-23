console.log('Hello World');
const dontChange = "Pardo";

let change = "@rafaelpardor";

function changeName(newName) {
    change = newName
}

const getUser2 = new Promise(function (res, err) {
    // CallAPI
    setTimeout(function () {
        // 3 seconds
        res('Time out');
    }, 6000)
});

const getUser = new Promise(function (res, err) {
    // CallAPI
    setTimeout(function () {
        // 3 seconds
        res('Time out');
    }, 3000)
});

getUser.then(function () {
        console.log('All ok');
    }).catch(function (message) {
        console.log(message)
    });

Promise.all([
    getUser,
    getUser2,
]).then(function(message){
    console.log(message);
}).catch(function(message){
    console.log(message);
});