function solve(input) {
  let text = input.shift();
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let sum = text[i];
    switch (sum) {
      case "a":
        count += 1;
        break;
      case "e":
        count += 2;
        break;
      case "i":
        count += 3;
        break;
      case "o":
        count += 4;
        break;
      case "u":
        count += 5;
        break;
    }
  }
  console.log(count);
}
solve(["bamboo"]);
