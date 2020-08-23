function experienceGaining(arr){

    let array = arr.slice();
    let neededExperience = Number(array.shift());
    let battles = Number(array.shift());
    let experience = 0;
    let isSuccess = false;
    let battlesCount = 0;

    for(let i = 1; i <= battles;i++){
        battlesCount++;
        let currentExperience = Number(array[i - 1])
        if(i % 3 === 0){
            experience += currentExperience * 1.15;
        }else if(i % 5 === 0){
            experience += currentExperience * 0.90;
        }else{
            experience += currentExperience
        }

        if(experience >= neededExperience){   
            isSuccess = true;
            break;
        }
    }
    let difference = neededExperience - experience;
    
    if(!isSuccess){
        console.log(`Player was not able to collect the needed experience, ${difference.toFixed(2)} more needed.`)
    }else{
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`)
    }


}
experienceGaining([
    '400', '5',
    '50',  '100',
    '200', '100',
    '20'
  ])