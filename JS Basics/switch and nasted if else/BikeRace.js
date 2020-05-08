function solve(input) {
  let numberYoungCrossers = +input.shift();
  let numberOldCrossers = +input.shift();
  let typeOfTrack = input.shift();

  let tax = 0.0;
  let allNumberOfCrossers = numberYoungCrossers + numberOldCrossers;
  switch (typeOfTrack) {
    case "trail":
      tax = numberYoungCrossers * 5.5 + numberOldCrossers * 7;
      break;
    case "cross-country":
      tax = numberYoungCrossers * 8 + numberOldCrossers * 9.5;
      if (allNumberOfCrossers >= 50) {
        tax = tax * 0.75;
      }
      break;
    case "downhill":
      tax = numberYoungCrossers * 12.25 + numberOldCrossers * 13.75;
      break;
    case "road":
      tax = numberYoungCrossers * 20 + numberOldCrossers * 21.5;
      break;
  }
  tax = tax * 0.95;

  console.log(`${tax.toFixed(2)}`);
}

solve(["20", "25", "cross-country"]);
