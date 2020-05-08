function solve(input){

    let b1 = Number(input.shift());
    let b2 = Number(input.shift());
    let h = Number(input.shift());

    let result = (b1 + b2) * (h / 2);

    console.log(result.toFixed(2));

}
solve(["8", "13", "7"]);