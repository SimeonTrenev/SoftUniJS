function solve(input) {
  let name = input.shift();
  let classNumber = 12;
  let counter = 1;
  let sumOfGrade = 0;
  while (classNumber >= counter) {
    let currentGrade = +input.shift();
    if (currentGrade >= 4) {
      sumOfGrade += currentGrade;
      counter++;
    }
  }
  let averageGrade = (sumOfGrade / classNumber).toFixed(2);
  console.log(`${name} graduated. Average grade: ${averageGrade}`);
}
solve([
  "Pesho",
  "4",
  "5.5",
  "6",
  "5.43",
  "4.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
  "6"
]);
