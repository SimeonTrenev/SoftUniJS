function huntingGames(arr){

    let array = arr.slice();
    let daysOfAdventure = Number(array.shift());
    let players = Number(array.shift());
    let groupEnergy = Number(array.shift());
    let waterPerDay = Number(array.shift());
    let foodPerDay = Number(array.shift());
    let isOver = true;

    let totalWater = daysOfAdventure * players * waterPerDay;
    let totalFood = daysOfAdventure * players * foodPerDay;



    
    for(let i = 1; i <= daysOfAdventure;i++){
        let currentEnergyLoss = Number(array[i-1]);
        if(i % 2 === 0 && i % 3 === 0){
            groupEnergy -= currentEnergyLoss
            if(groupEnergy <= 0){
                console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
                isOver = false;
                break;
            }
            groupEnergy *= 1.05;
            totalWater *= 0.7
            groupEnergy *= 1.10;
            let reducedFood = totalFood / players;
            totalFood -= reducedFood;
        }else if(i % 2 === 0){
            groupEnergy -= currentEnergyLoss
            if(groupEnergy <= 0){
                console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
                isOver = false;
                break;
            }
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }else if(i % 3 === 0){
            groupEnergy -= currentEnergyLoss
            if(groupEnergy <= 0){
                console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
                isOver = false;
                break;
            }
            groupEnergy *= 1.10;
            let reducedFood = totalFood / players;
            totalFood -= reducedFood;
        }else{
            groupEnergy -= currentEnergyLoss;
        }

        if(groupEnergy <= 0){
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
            isOver = false;
            break;
        }
        
    }
    if(isOver){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }

}
huntingGames([
    '12',    '6',     '4430',
    '9.8',   '5.5',   '620.3',
    '840.2', '960.1', '220',
    '340',   '674',   '365',
    '345.5', '212',   '412.12',
    '258',   '496',   ''
  ])