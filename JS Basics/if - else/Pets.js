function solve(input){

    let days = Number(input.shift());
    let foodInKilorgrams = Number(input.shift());
    let dogFoodForADayInKilograms = Number(input.shift());
    let catFoodForADayInKilograms = Number(input.shift());
    let turtleFoodForADayInGRAMS = Number(input.shift()) / 1000;

    let catsFood = days * catFoodForADayInKilograms;
    let dogsFood = days * dogFoodForADayInKilograms;
    let turtleFood = days * turtleFoodForADayInGRAMS;
    let allPetsFood = catsFood + dogsFood + turtleFood;
    let problem = Math.abs(foodInKilorgrams - allPetsFood);

    if(allPetsFood <= foodInKilorgrams){
        console.log(`${Math.floor(problem)} kilos of food left.`)
    }else if(allPetsFood > foodInKilorgrams){
        console.log(`${Math.ceil(problem)} more kilos of food are needed.`)
    }






}

solve(['2', '10', '1', '1', '1200']);