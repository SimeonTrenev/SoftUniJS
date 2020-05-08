function solve(input) {
  let n = +input.shift();
  let counter = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (n > counter) {
    let currentNumber = +input.shift();
    maxNumber = Math.max(maxNumber, currentNumber);
    counter++;
  }
  console.log(maxNumber);
}
solve(["2", "100", "99"]);
