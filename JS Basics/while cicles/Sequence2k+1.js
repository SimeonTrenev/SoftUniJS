function solve(input) {
  let n = +input.shift();
  let number = 1;

  while (n >= number) {
    console.log(number);
    number = number * 2 + 1;
  }
}
solve(["8"]);
