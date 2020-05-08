function solve(input) {
  let month = input.shift();
  let nights = +input.shift();

  let priceForApartment = 0;
  let priceFOrStudio = 0;

  if (month === "May" || month === "October") {
    priceFOrStudio = 50 * nights;
    priceForApartment = 65 * nights;
    if (nights > 14) {
      priceFOrStudio = priceFOrStudio * 0.7;
    }
    if (nights > 7 && nights <= 14) {
      priceFOrStudio = priceFOrStudio * 0.95;
    }
    if (nights > 14) {
      priceForApartment = priceForApartment * 0.9;
    }
  } else if (month === "June" || month === "September") {
    priceFOrStudio = 75.2 * nights;
    priceForApartment = 68.7 * nights;
    if (nights > 14) {
      priceFOrStudio = priceFOrStudio * 0.8;
    }
    if (nights > 14) {
      priceForApartment = priceForApartment * 0.9;
    }
  } else if (month === "July" || month === "August") {
    priceFOrStudio = 76 * nights;
    priceForApartment = 77 * nights;
    if (nights > 14) {
      priceForApartment = priceForApartment * 0.9;
    }
  }
  console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceFOrStudio.toFixed(2)} lv.`);
}

solve(["June", "14"]);
