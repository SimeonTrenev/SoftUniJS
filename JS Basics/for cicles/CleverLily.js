function solve(input) {
  let ageOfLilly = +input.shift();
  let priceForWashingMachine = +input.shift();
  let toyPrice = +input.shift();
  let countOfToys = 0;
  let money = 0;
  let tensOfmoney = 10;

  for (let i = 1; i <= ageOfLilly; i++) {
    if (i % 2 !== 0) {
      countOfToys += 1;
    } else {
      money += tensOfmoney;
      money -= 1;
      tensOfmoney += 10;
    }
  }
  countOfToys *= toyPrice;
  money += countOfToys;
  let sum = Math.abs(money - priceForWashingMachine);
  if (money >= priceForWashingMachine) {
    console.log(`Yes! ${sum.toFixed(2)}`);
  } else {
    console.log(`No! ${sum.toFixed(2)}`);
  }
}
// countOfToys *= toyPrice;

solve(["21", "1570.98", "3"]);
