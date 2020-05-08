function charityCampaign(input){

let days = Number(input.shift());
let sweetMakers = Number(input.shift());
let numberCakes = Number(input.shift());
let numberGofrette = Number(input.shift());
let numberPancakes = Number(input.shift());


let cake = 45; // za 1 br torta
let gofrette = 5.80 // za 1 br gofreta
let pancake = 3.20 // za 1 br palachinka

let sumByDayCake = numberCakes * cake;
let sumByDayGofrette = numberGofrette * gofrette;
let sumByDayPancake = numberPancakes * pancake;

let sumByDayForAll = (sumByDayCake + sumByDayGofrette + sumByDayPancake) * sweetMakers;
let sumByDayBeforeExpense = sumByDayForAll * days;

let expense = 1/8 * sumByDayBeforeExpense;
let charityMoney = sumByDayBeforeExpense - expense;
console.log(charityMoney.toFixed(2));



}
charityCampaign(["20",
    "8",
    "14",
    "30",
    "16",

]);