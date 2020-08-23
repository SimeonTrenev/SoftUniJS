function easterCozonacs(arr){

let array = arr.slice();
let budget = Number(array.shift());
let priceFor1kgFlour = Number(array.shift());
let eggsPrice = priceFor1kgFlour * 0.75;
let milkPrice = priceFor1kgFlour * 1.25;

let priceFor1Kozunack = priceFor1kgFlour + eggsPrice + (milkPrice / 4);
let numberOfKozunacks = 0;
let colouredEggs = 0;
let money = budget

for(let i = priceFor1Kozunack; i < budget;i+=priceFor1Kozunack){
    numberOfKozunacks++;
    colouredEggs += 3;
    if(numberOfKozunacks % 3 === 0){
        let losedEggs = numberOfKozunacks - 2;
        colouredEggs -= losedEggs
    }
    money -= priceFor1Kozunack
}
console.log(`You made ${numberOfKozunacks} cozonacs! Now you have ${colouredEggs} eggs and ${money.toFixed(2)}BGN left.`)


}
easterCozonacs([ '15.75', '1.4' ])