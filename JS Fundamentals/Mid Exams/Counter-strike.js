function counterStrike(input){

    let array = input.slice();

    let initialEnergy = Number(array.shift());
    let countOfWonBattles = 0;

    for(let i = 0; i < array.length;i++){
        let currentBattle = array[i]
        
        if(currentBattle === 'End of battle'){
            console.log(`Won battles: ${countOfWonBattles}. Energy left: ${initialEnergy}`)
            break;
        }else{
            currentBattle = Number(currentBattle)
        }

        if(initialEnergy - currentBattle >= 0){
            countOfWonBattles++;
            initialEnergy -= currentBattle
        }else{
            console.log(`Not enough energy! Game ends with ${countOfWonBattles} won battles and ${initialEnergy} energy`)
            break;
        }
        if(countOfWonBattles % 3 === 0){
            initialEnergy += countOfWonBattles;
        }

    }
    
    
   
    
}
counterStrike([ '200', '54', '14', '28', '13', 'End of battle' ]
    )