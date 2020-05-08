function solve(input) {
  let comand = input.shift();
  while (comand !== "Stop") {
    console.log(comand);
    comand = input.shift();
  }
}
solve(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop"]);
