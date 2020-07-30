const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true){
      resolve("Todo bien");
    } else {
      reject("ups");
    }
  });
}

helloPromise().then(response => console.log(response)).catch(error => console.log(reject));

