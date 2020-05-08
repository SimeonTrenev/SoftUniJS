function solve(input) {
  let width = +input.shift();
  let length = +input.shift();
  let height = +input.shift();
  let comand = input.shift();
  let sumOfall = width * length * height;

  while (comand !== "Done") {
    comand = Number(comand);
    sumOfall -= comand;
    if (sumOfall < 0) {
      break;
    }
    comand = input.shift();
  }
  let neededCubicMatres = Math.abs(0 - sumOfall);
  if (comand === "Done" && sumOfall >= 0) {
    console.log(`${sumOfall} Cubic meters left.`);
  }
  if (sumOfall < 0) {
    console.log(
      `No more free space! You need ${neededCubicMatres} Cubic meters more.`
    );
  }
}
solve(["10", "1", "2", "4", "6", "Done"]);
