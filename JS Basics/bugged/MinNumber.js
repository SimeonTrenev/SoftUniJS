function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let minNumber = Number.MAX_SAFE_INTEGER;

  while (n > counter) {
    let currentNumber = +input.shift();
    minNumber = Math.min(minNumber, currentNumber);
    counter++;
  }
  console.log(minNumber);
}
solve(["3", "-10", "20", "-30"]);
