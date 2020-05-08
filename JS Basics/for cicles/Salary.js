function solve(input) {
  let openTabs = +input.shift();
  let salary = +input.shift();

  for (let i = 0; i < openTabs; i++) {
    let websites = input.shift();
    if (websites === "Facebook") {
      salary -= 150;
    } else if (websites === "Instagram") {
      salary -= 100;
    } else if (websites === "Reddit") {
      salary -= 50;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (salary > 0) {
    console.log(salary);
  }
}
solve([
  10,
  750,
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook"
]);
