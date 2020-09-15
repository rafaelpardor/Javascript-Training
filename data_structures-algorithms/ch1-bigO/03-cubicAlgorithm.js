function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
      for (let k = 0; k < n; k++) {
        console.log(k);
      }
    }
  }
}

main();

function main() {
  exampleCubic(5);
}
