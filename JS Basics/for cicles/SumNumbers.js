function solve(input) {
  let n = +input.shift();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let countNumber = +input.shift();

    sum += countNumber;
  }
  console.log(sum);
}
solve(["4", "45", "-20", "7", "11"]);
