function solve(input) {
  let numberOfBadGrades = +input.shift();
  let nameOfTask = input.shift;
  let grade = +input.shift();
  let counted = 0;
  let sumOfGrades = 0;
  let sumOfTasks = 0;
  let isEnough = false;
  while (numberOfBadGrades > counted) {
    sumOfGrades += grade;
    if (grade <= 4) {
      counted++;
    }
    sumOfTasks++;
    nameOfTask = input.shift();
    grade = +input.shift();
    if (nameOfTask === "Enough") {
      isEnough = true;

      break;
    }
  }
  let averageGrade = sumOfGrades / sumOfTasks;
  if (isEnough === true) {
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${sumOfTasks}`);
    console.log(`Last problem: ${nameOfTask}`);
  } else {
    console.log(`You need a break, ${counted} poor grades.`);
  }
}
solve(["4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough", ""]);
