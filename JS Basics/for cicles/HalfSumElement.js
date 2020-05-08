function solve(input) {
  let n = +input.shift();
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let currentNumber = +input.shift();
    sum += currentNumber;
    if (currentNumber > max) {
      max = currentNumber;
    }
  }
  let sumWithoutMaxNumber = Math.abs(sum - max);
  if (sumWithoutMaxNumber === max) {
    console.log(`Yes`);
    console.log(`Sum = ${sumWithoutMaxNumber}`);
  } else {
    console.log(`No`);
    console.log(`Diff = ${Math.abs(sumWithoutMaxNumber - max)}`);
  }
}
solve([3, 5, 5, 1]);
