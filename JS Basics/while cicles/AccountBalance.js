function solve(input) {
  let numberOfIncrease = +input.shift();
  let counts = 0;
  let sum = 0;
  while (numberOfIncrease > counts) {
    let currentIncrease = +input.shift();

    if (currentIncrease >= 0) {
      console.log(`Increase: ${currentIncrease.toFixed(2)}`);
    } else {
      console.log("Invalid operation!");
      break;
    }

    sum += currentIncrease;
    counts++;
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
solve(["5", "120", "45.55", "-150"]);
