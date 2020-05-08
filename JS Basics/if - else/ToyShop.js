function solve(input){

    let priceExcursion = Number(input.shift());
    let puzzels = Number(input.shift());
    let dols = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    
    let priceForPuzzels = 2.60;
    let priceForDols = 3;
    let priceForBears = 4.10;
    let priceForMinions = 8.20;
    let priceForTrucks = 2;
    let discount = 0.25;
    let loan = 0.1;

    let sum = puzzels * priceForPuzzels + dols * priceForDols + bears * priceForBears + minions * priceForMinions + trucks * priceForTrucks;
    let toys = puzzels + dols + bears + minions + trucks;

    if(toys >= 50){
        sum = sum *(1 - discount)
    }
    
    sum = sum * (1 - loan);

    if(sum >= priceExcursion){
        console.log(`Yes! ${(sum - priceExcursion).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceExcursion - sum).toFixed(2)} lv needed.`)
    }



}

solve(['40.8', '20', '25', '30', '50', '10']);