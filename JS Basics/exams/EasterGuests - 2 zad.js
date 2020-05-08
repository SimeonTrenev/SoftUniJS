function solve(input){

    let numberOfGuests = +input.shift();
    let budget = +input.shift();
    let priceForKozunak = 4;
    let priceForEgg = 0.45;

    let neededKozunaks = Math.ceil(numberOfGuests / 3);
    let neededEggs = numberOfGuests * 2;

    let allKozunak = priceForKozunak * neededKozunaks;
    let allEggs = priceForEgg * neededEggs
    let priceAll = allKozunak + allEggs

    let sum = Math.abs(budget - priceAll)

    if(budget < priceAll){
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${sum.toFixed(2)} lv. more.`);
    }else{
        console.log(`Lyubo bought ${neededKozunaks} Easter bread and ${neededEggs} eggs.`);
        console.log(`He has ${sum.toFixed(2)} lv. left.`);
    }

}
solve(['9', '12'])