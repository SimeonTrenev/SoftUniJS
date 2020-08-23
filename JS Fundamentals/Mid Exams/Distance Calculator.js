function distanceCalculator(arr){

    let array = arr.slice();

    let numberOfSteps = Number(array.shift());
    let legthOfStepInSantimiters = Number(array.shift());
    let distanceInSantimetres = Number(array.shift()) * 100;
    let allDistance = 0;
    
    for(let i = 1; i <= numberOfSteps;i++){
        
        if(i % 5 === 0){
            allDistance += (numberOfSteps / numberOfSteps) * (legthOfStepInSantimiters * 0.7)
        }else{
            allDistance += (numberOfSteps / numberOfSteps) * legthOfStepInSantimiters
        }
    }
    
    let percent = (allDistance / distanceInSantimetres) * 100;
    console.log(`You travelled ${percent.toFixed(2)}% of the distance!`)

    



}
distanceCalculator([ '100', '2', '1' ])