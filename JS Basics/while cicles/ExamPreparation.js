function solve(input) {
  let numberOfBadGrades = +input.shift();
  let averageGrade = 0
  let examCount = 0;
  let lastExam = '';
  let poorGrades = 0;
  let allGrades = 0
  
  let currentExam = input.shift();
  let currentGrade = +input.shift();
  let isEnought = (currentExam !== "Enough");
  let isPoorGrades = (numberOfBadGrades > poorGrades)
  while(isEnought && isPoorGrades){
    if(currentGrade <= 4){
      poorGrades++;
    }
    lastExam = currentExam;
    examCount++;
    allGrades += currentGrade

    currentExam = input.shift();
    currentGrade = +input.shift();
    isEnought = currentExam !== 'Enough';
    isPoorGrades = poorGrades < numberOfBadGrades
  }
  averageGrade = allGrades /  examCount;
  if (poorGrades < numberOfBadGrades) {
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${examCount}`);
    console.log(`Last problem: ${lastExam}`);
  } else {
    console.log(`You need a break, ${poorGrades} poor grades.`);
  }
}
solve(['3',
  'Money',
  '6',
  'Story',
  '4',
  'Spring Time',
  '5',
  'Bus',
  '6',
  'Enough'
  ]);
