function solve(input) {
  const n = +input.shift();
  let leftSide = 0;
  let rightSide = 0;
  for (let i = 0; i < n * 2; i++) {
    let num = +input.shift();
    if (i < n) {
      leftSide += num;
    }
    if (i >= n) {
      rightSide += num;
    }
  }
  let sum = Math.abs(leftSide - rightSide);
  if (leftSide === rightSide) {
    console.log(`Yes, sum = ${leftSide}`);
  } else {
    console.log(`No, diff = ${sum}`);
  }
}
solve(["2", "10", "90", "60", "40"]);
