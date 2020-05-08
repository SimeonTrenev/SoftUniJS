function solve(input){

    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let priceDressStatists = Number(input.shift()); // cena na obleklo za 1 statist
    let decorPercent = 0.1;

    let decor = budget * decorPercent;
    let dressForAllStatists = statists * priceDressStatists;

    if(statists >= 150){
        dressForAllStatists = dressForAllStatists * 0.9
    }

    let expense = decor + dressForAllStatists;
    
    if(expense > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(expense - budget).toFixed(2)} leva more.`)
    } else if(expense <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - expense).toFixed(2)} leva left.`)
    }




}

solve(['15437.62', '186', '57.99']);