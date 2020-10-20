function* helloWorld() {
  if (true) {
    yield 'hello';
  }
  if (true) {
    yield 'world';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
