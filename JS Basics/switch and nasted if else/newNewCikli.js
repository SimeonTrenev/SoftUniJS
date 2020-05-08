function solve(input) {
  //   let username = input.shift();
  //   let userPassword = input.shift();
  //   let pass = input.shift();

  //   while (userPassword !== pass) {
  //     pass = input.shift();
  //   }

  //   console.log(`Welcome ${username}`);
  //
  //   let n = +input.shift();
  //   let k = 1;

  //   while (k <= n) {
  //     console.log(k);
  //     k = k * 2 + 1;
  //   }
  let sumCounter = +input.shift();
  let k = 0;
  let totalSum = 0;
  let inputSum = +input.shift();

  while (k <= sumCounter) {
    k++;

    if (inputSum >= 0) {
    } else {
      break;
    }
    inputSum = +input.shift();
  }

  console.log(totalSum);
}

solve(["5", "120", "45.55", "-150"]);
