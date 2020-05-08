function solve(input) {
  let budget = +input.shift();
  let season = input.shift();
  let price = 0;
  let typeOfCar = "";
  let classOfCar = "";

  switch (season) {
    case "Summer":
      if (budget <= 100) {
        classOfCar = "Economy class";
        typeOfCar = "Cabrio";
        price = budget * 0.35;
      } else if (budget > 100 && budget <= 500) {
        classOfCar = "Compact class";
        typeOfCar = "Cabrio";
        price = budget * 0.45;
      } else if (budget > 500) {
        classOfCar = "Luxury class";
        typeOfCar = "Jeep";
        price = budget * 0.9;
      }
      break;
    case "Winter":
      if (budget <= 100) {
        classOfCar = "Economy class";
        typeOfCar = "Jeep";
        price = budget * 0.65;
      } else if (budget > 100 && budget <= 500) {
        classOfCar = "Compact class";
        typeOfCar = "Jeep";
        price = budget * 0.8;
      } else if (budget > 500) {
        classOfCar = "Luxury class";
        typeOfCar = "Jeep";
        price = budget * 0.9;
      }
      break;
  }
  console.log(`${classOfCar}`);
  console.log(`${typeOfCar} - ${price.toFixed(2)}`);
}
solve(["450", "Winter"]);
