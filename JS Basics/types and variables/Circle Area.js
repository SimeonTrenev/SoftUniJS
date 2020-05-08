function circleArea(input){
let radius = Number(input.shift());
let area = radius * radius * Math.PI;
console.log(area.toFixed(2));


}
circleArea(["20"]);