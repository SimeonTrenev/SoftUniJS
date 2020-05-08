function solve(input) {
  let budget = +input.shift();
  let category = input.shift();
  let numberOfPeople = +input.shift();
  let vipTickets = 499.99;
  let normalTickets = 249.99;
  let transport = 0;
  let price = 0;

  switch (category) {
    case "Normal":
      if (numberOfPeople >= 1 && numberOfPeople <= 4) {
        transport = budget * 0.75;
      } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
        transport = budget * 0.6;
      } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
        transport = budget * 0.5;
      } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
        transport = budget * 0.4;
      } else {
        transport = budget * 0.25;
      }
      price = normalTickets * numberOfPeople;
      break;
    case "VIP":
      if (numberOfPeople >= 1 && numberOfPeople <= 4) {
        transport = budget * 0.75;
      } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
        transport = budget * 0.6;
      } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
        transport = budget * 0.5;
      } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
        transport = budget * 0.4;
      } else {
        transport = budget * 0.25;
      }
      price = vipTickets * numberOfPeople;
      break;
  }
  let cost = price + transport;
  let sum = Math.abs(budget - cost);

  if (budget >= cost) {
    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
  }
}

solve(["30000", "VIP", "49"]);
