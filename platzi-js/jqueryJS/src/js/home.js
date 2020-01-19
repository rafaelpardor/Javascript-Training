console.log('Hello World');
const dontChange = "Pardo";

let change = "@rafaelpardor"

function changeName(newName) {
  change = newName
}

const getUser = new Promise(function(response, err) {
    // CallAPI
    setTimeout(function() {
        // 3 seconds
        err();
    }, 3000)
})

getUser
    .then(function(){
        console.log('All ok');
    })
    .catch(function(){
        console.log("Error")
    })

