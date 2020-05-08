function solve(input) {
  let n = +input.shift();

  let oddSum = 0;
  let oddMinimum = Number.MAX_SAFE_INTEGER;
  let oddMaximum = Number.MIN_SAFE_INTEGER;

  let evenSum = 0;
  let evenMinimum = Number.MAX_SAFE_INTEGER;
  let evenMaximum = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= n; i++) {
    let currentNumber = +input.shift();
    if (i % 2 !== 0) {
      oddSum += currentNumber;
      oddMinimum = Math.min(oddMinimum, currentNumber);
      oddMaximum = Math.max(oddMaximum, currentNumber);
    } else {
      evenSum += currentNumber;
      evenMinimum = Math.min(evenMinimum, currentNumber);
      evenMaximum = Math.max(evenMaximum, currentNumber);
    }
  }
  console.log(`OddSum=${oddSum.toFixed(2)},`);
  if (
    oddMinimum !== Number.MAX_SAFE_INTEGER &&
    oddMaximum !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`OddMin=${oddMinimum.toFixed(2)},`);
    console.log(`OddMax=${oddMaximum.toFixed(2)},`);
  } else {
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${evenSum.toFixed(2)},`);
  if (
    evenMinimum !== Number.MAX_SAFE_INTEGER &&
    evenMaximum !== Number.MIN_SAFE_INTEGER
  ) {
    console.log(`EvenMin=${evenMinimum.toFixed(2)},`);
    console.log(`EvenMax=${evenMaximum.toFixed(2)}`);
  } else {
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
  }
}
solve([1, 1]);
