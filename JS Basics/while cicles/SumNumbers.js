function solve(input) {
  let data = input.shift();
  let sum = 0;
  while (data !== "Stop") {
    data = Number(data);
    sum += data;
    data = input.shift();
  }
  console.log(sum);
}
solve(["10", "20", "30", "45", "Stop"]);
