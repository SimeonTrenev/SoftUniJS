function solve(input) {
  let budget = +input.shift();
  let season = input.shift();
  let location = "";
  let typeOfRests = "";
  let price = 0;

  if (season === "Summer") {
    if (budget <= 1000) {
      typeOfRests = "Camp";
      location = "Alaska";
      price = budget * 0.65;
    } else if (budget > 1000 && budget <= 3000) {
      typeOfRests = "Hut";
      location = "Alaska";
      price = budget * 0.8;
    } else if (budget > 3000) {
      typeOfRests = "Hotel";
      location = "Alaska";
      price = budget * 0.9;
    }
  } else {
    if (budget <= 1000) {
      typeOfRests = "Camp";
      location = "Morocco";
      price = budget * 0.45;
    } else if (budget > 1000 && budget <= 3000) {
      typeOfRests = "Hut";
      location = "Morocco";
      price = budget * 0.6;
    } else if (budget > 3000) {
      typeOfRests = "Hotel";
      location = "Morocco";
      price = budget * 0.9;
    }
  }
  console.log(`${location} - ${typeOfRests} - ${price.toFixed(2)}`);
}
solve(["800", "Summer"]);
