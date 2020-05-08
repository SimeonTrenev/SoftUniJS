function solve(input) {
  let n = +input.shift();
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 0; i < n; i++) {
    let currentNumber = +input.shift();
    if (currentNumber < 200) {
      p1 += 1;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2 += 1;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3 += 1;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4 += 1;
    } else if (currentNumber >= 800) {
      p5 += 1;
    }
  }
  p1 = (p1 / n) * 100;
  p2 = (p2 / n) * 100;
  p3 = (p3 / n) * 100;
  p4 = (p4 / n) * 100;
  p5 = (p5 / n) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
solve([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
