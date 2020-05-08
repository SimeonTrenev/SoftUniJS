function solve(input) {
  let n = +input.shift();
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let currentNumber = +input.shift();
    min = Math.min(min, currentNumber);
    max = Math.max(max, currentNumber);
  }
  console.log(`Max number: ${max}`);
  console.log(`Min number: ${min}`);
}
solve(["5", "10", "20", "304", "0", "50"]);
