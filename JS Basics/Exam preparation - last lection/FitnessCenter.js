function solve(input){

    let numberOfTrainingPeople = +input.shift();
    let counterForBack = 0;
    let counterForBackChest = 0;
    let counterForLegs = 0;
    let counterForABS = 0;
    let counterForProteinShake = 0;
    let counterForProteinBar = 0;
    let counterForTains = 0;
    let counterForNonTrains = 0
    for(let i = 1; i <= numberOfTrainingPeople;i++){
        let comand = input.shift();
        if(comand === 'Back'){
            counterForBack++
            counterForTains++
        }else if(comand === 'Chest'){
            counterForBackChest++;
            counterForTains++
        }else if(comand === 'Legs'){
            counterForLegs++;
            counterForTains++
        }else if(comand === 'Abs'){
            counterForABS++
            counterForTains++
        }else if(comand === 'Protein shake'){
            counterForProteinShake++
            counterForNonTrains++
        }else if(comand === 'Protein bar'){
            counterForProteinBar++;
            counterForNonTrains++
        }
    }
    console.log(`${counterForBack} - back`);
    console.log(`${counterForBackChest} - chest`);
    console.log(`${counterForLegs} - legs`);
    console.log(`${counterForABS} - abs`);
    console.log(`${counterForProteinShake} - protein shake`);
    console.log(`${counterForProteinBar} - protein bar`);
    console.log(`${((counterForTains / numberOfTrainingPeople)*100).toFixed(2)}% - work out`);
    console.log(`${((counterForNonTrains / numberOfTrainingPeople)*100).toFixed(2)}% - protein`);
}
solve(['10',          'Back',
'Chest',       'Legs',
'Abs',         'Protein shake',
'Protein bar', 'Protein shake',
'Protein bar', 'Legs',
'Abs',         ''])