function solve(input) {
  let n = +input.shift();
  let oddPossition = 0;
  let evenPossition = 0;

  for (let i = 0; i < n; i++) {
    let number = +input.shift();
    if (i % 2 === 0) {
      evenPossition += number;
    } else {
      oddPossition += number;
    }
  }
  let result = Math.abs(evenPossition - oddPossition);
  if (oddPossition === evenPossition) {
    console.log(`Yes
Sum = ${oddPossition}`);
  } else {
    console.log(`No
Diff = ${result}`);
  }
}
solve(["4", "3", "5", "1", "-2"]);
