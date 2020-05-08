function alcoholMarket(input){

let priceWhiskyInBGN = Number(input.shift());
let beerInLitres = Number(input.shift());
let wineInLitres = Number(input.shift());
let rakiaInLitres = Number(input.shift());
let whiskyInLitres = Number(input.shift());

let priceRakia = priceWhiskyInBGN / 2;
let priceWine = priceRakia * 0.6;
let priceBeer = priceRakia * 0.2;

let allWhisky = priceWhiskyInBGN * whiskyInLitres;
let allRakia = priceRakia * rakiaInLitres;
let allWine = priceWine * wineInLitres;
let allBeer = priceBeer * beerInLitres;

let moneyAll = allWhisky + allRakia + allWine + allBeer;
console.log(moneyAll.toFixed(2));



}

alcoholMarket(["50",
    "10",
    "3.5",
    "6.5",
    "1",

]);