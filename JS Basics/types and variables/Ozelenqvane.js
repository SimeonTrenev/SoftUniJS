function solve(input){

let kvMetresTo = Number(input.shift());
let price = 7.61;

let priceBefore = kvMetresTo * price;
let discount = priceBefore * 0.18;
let finalPrice = priceBefore - discount;

console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
console.log(`The discount is: ${discount.toFixed(2)} lv.`);


}
solve(["540"]);