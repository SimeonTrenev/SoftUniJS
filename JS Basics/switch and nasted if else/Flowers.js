function solve(input) {
  let hrisantemsNumber = +input.shift();
  let rosesNumber = +input.shift();
  let tulipsNumber = +input.shift();
  let season = input.shift();
  let isTheDayHoliday = input.shift();
  let priceForArraging = 2;
  let priceForHrisantems = 0;
  let priceForRoses = 0;
  let priceForTulips = 0;
  let allNumbersOfFlowers = hrisantemsNumber + rosesNumber + tulipsNumber;
  let priceForAllFlowers = 0;

  switch (season) {
    case "Spring":
      priceForHrisantems = hrisantemsNumber * 2;
      priceForRoses = rosesNumber * 4.1;
      priceForTulips = tulipsNumber * 2.5;
      priceForAllFlowers = priceForHrisantems + priceForRoses + priceForTulips;
      if (isTheDayHoliday === "Y") {
        priceForAllFlowers = priceForAllFlowers * 1.15;
      }
      if (tulipsNumber > 7) {
        priceForAllFlowers = priceForAllFlowers * 0.95;
      }
      if (allNumbersOfFlowers > 20) {
        priceForAllFlowers *= 0.8;
      }
      priceForAllFlowers += priceForArraging;

      break;
    case "Summer":
      priceForHrisantems = hrisantemsNumber * 2;
      priceForRoses = rosesNumber * 4.1;
      priceForTulips = tulipsNumber * 2.5;
      priceForAllFlowers = priceForHrisantems + priceForRoses + priceForTulips;
      if (isTheDayHoliday === "Y") {
        priceForAllFlowers = priceForAllFlowers * 1.15;
      }
      if (allNumbersOfFlowers > 20) {
        priceForAllFlowers *= 0.8;
      }
      priceForAllFlowers += priceForArraging;
      break;
    case "Autumn":
      priceForHrisantems = hrisantemsNumber * 3.75;
      priceForRoses = rosesNumber * 4.5;
      priceForTulips = tulipsNumber * 4.15;
      priceForAllFlowers = priceForHrisantems + priceForRoses + priceForTulips;
      if (isTheDayHoliday === "Y") {
        priceForAllFlowers = priceForAllFlowers * 1.15;
      }
      if (allNumbersOfFlowers > 20) {
        priceForAllFlowers *= 0.8;
      }
      priceForAllFlowers += priceForArraging;
      break;
    case "Winter":
      priceForHrisantems = hrisantemsNumber * 3.75;
      priceForRoses = rosesNumber * 4.5;
      priceForTulips = tulipsNumber * 4.15;
      priceForAllFlowers = priceForHrisantems + priceForRoses + priceForTulips;
      if (isTheDayHoliday === "Y") {
        priceForAllFlowers = priceForAllFlowers * 1.15;
      }
      if (rosesNumber >= 10) {
        priceForAllFlowers = priceForAllFlowers * 0.9;
      }
      if (allNumbersOfFlowers > 20) {
        priceForAllFlowers *= 0.8;
      }
      priceForAllFlowers += priceForArraging;
      break;
  }

  console.log(priceForAllFlowers.toFixed(2));
}

solve(["10", "10", "10", "Autumn", "N"]);
