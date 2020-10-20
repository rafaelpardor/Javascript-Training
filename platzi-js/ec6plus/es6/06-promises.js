const helloPromise = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve('Todo bien');
    } else {
      reject('ups');
    }
  });
};

helloPromise(true)
  .then((response) => console.log(response))
  .catch((error) => console.log(reject));
