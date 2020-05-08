function solve(input) {
  let name = input.shift();
  let yearsInSchool = 12;
  let counter = 1;
  let sumOfGrades = 0;
  let badGrades = 0;
  while (yearsInSchool >= counter) {
    let currentGrade = +input.shift();
    if (currentGrade >= 4) {
      sumOfGrades += currentGrade;
      counter++;
    }
    if (currentGrade < 4) {
      badGrades += 1;
      if (badGrades > 1) {
        console.log(`${name} has been excluded at ${counter} grade`);
        break;
      }
    }
  }
  let averageGrade = (sumOfGrades / yearsInSchool).toFixed(2);

  if (badGrades < 2) {
    console.log(`${name} graduated. Average grade: ${averageGrade}`);
  }
}
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
