function solve(input){

    let side = Number(input.shift());
    let height = Number(input.shift());

    let area = side * height / 2;
    console.log(area.toFixed(2));


}
solve(["20", "30"]);