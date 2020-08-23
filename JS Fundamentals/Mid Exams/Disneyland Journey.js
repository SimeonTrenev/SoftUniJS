function disneyLand(arr){

    let array = arr.slice()
    let neededMoneyForJourney = Number(array.shift());
    let monthsForSaving = Number(array.shift());
    let money = 0;
    
    for(let i = 1; i <= monthsForSaving;i++){    
        
        if(i > 1 && i % 2 !== 0){
            money *= 0.84;
        }
        if(i % 4 === 0){
            money *= 1.25;
        }
        money += neededMoneyForJourney / 4
        
    }
    let isVacationPossible = Math.abs(money - neededMoneyForJourney);

    if(money >= neededMoneyForJourney){
        console.log(`Bravo! You can go to Disneyland and you will have ${isVacationPossible.toFixed(2)}lv. for souvenirs.`)
    }else{
        console.log(`Sorry. You need ${isVacationPossible.toFixed(2)}lv. more.`)
    }

}
disneyLand([ '3265', '3' ])