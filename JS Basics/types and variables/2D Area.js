function solve(input){

    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let h = Math.abs(y1 - y2);
    let w = Math.abs(x1 - x2);

    let area = h * w;
    let perimeter = 2 * (h + w);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));




}
solve([
   "30",
    "40",
    "70",
    "-10"
]);