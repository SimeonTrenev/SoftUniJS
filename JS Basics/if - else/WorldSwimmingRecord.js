function solve(input){

    let recordInSeconds = Number(input.shift());
    let distanceInMeeters = Number(input.shift());
    let speedInSeconds = Number(input.shift()); // vremeto v sekundi, za koeto prepluva razstoqnie ot 1 metur
    let resistanceInMetrees = 15; // suprotivlenie na 15m go zabavq s 12.5 sekundi
    let resistanceInSeconds = 12.5

    let resultInSwiming = distanceInMeeters * speedInSeconds;
    let resistanceTimes = Math.floor(distanceInMeeters / resistanceInMetrees);
    let resistanceAllSeconds = resistanceTimes * resistanceInSeconds;
    let IvanchoTime = resultInSwiming + resistanceAllSeconds;
    
    if(IvanchoTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(IvanchoTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(IvanchoTime - recordInSeconds).toFixed(2)} seconds slower.`)
    }

    




}

solve(['55555.67', '3017', '5.03']);