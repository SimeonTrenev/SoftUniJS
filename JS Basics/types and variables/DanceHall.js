function danceHall(input){

let length = Number(input.shift());
let width = Number(input.shift());
let side = Number(input.shift());
let dancerSpase = 40 + 7000;


let area = (length * 100) * (width * 100);
let wardrobe = (side * 100) * (side * 100);
let bench = area / 10;
let hallFreeSpace = area - wardrobe - bench;

let dancers = hallFreeSpace / dancerSpase;

console.log(Math.floor(dancers));



}
danceHall(["50",
"25",
"5",

]);