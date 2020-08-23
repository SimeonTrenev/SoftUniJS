function manOWar(arr){

    let array = arr.slice();
    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maximumHealth = Number(array.shift());

    for(let elements of array){
        let currentCommands = elements.split(' ')
        let comand = currentCommands[0];
        let index = Number(currentCommands[1])
        let damage = Number(currentCommands[2])

        if(comand === 'Fire'){
            if(warShip.includes(warShip[index])){
                if(warShip[index] - damage <= 0){
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                warShip[index] -= damage;
            }
        }else if(comand === 'Defend'){
            let startIndex = Number(currentCommands[1])
            let endIndex = Number(currentCommands[2])
            let currentDamage = Number(currentCommands[3])
            if(pirateShip.includes(pirateShip[startIndex]) && pirateShip.includes(pirateShip[endIndex])){
                for(let i = startIndex;i <= endIndex;i++){
                    if(pirateShip[i] - currentDamage <= 0 ){
                        console.log(`You lost! The pirate ship has sunken.`)
                        return;
                    } 
                    pirateShip[i] -= currentDamage;
                }
            }
        }else if(comand === 'Repair'){
            let healthForReapair = Number(currentCommands[2])
            if(pirateShip.includes(pirateShip[index])){
                if(pirateShip[index] + healthForReapair > maximumHealth){
                    pirateShip[index] = maximumHealth
                }else{
                    pirateShip[index] += healthForReapair
                }
            }
        }else if(comand === 'Status'){
            let count = 0;
            for(let i = 0; i < pirateShip.length;i++){
                let currentPirateSection = pirateShip[i]
                if(currentPirateSection < (maximumHealth * 0.2)){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`)
        }else if(comand === 'Retire'){
            let resultForPirateShip = 0;
            let sumForWarShip = 0;
            for(let el of pirateShip){
                resultForPirateShip += el;
            }
            for(let el of warShip){
                sumForWarShip += el;
            }
            console.log(`Pirate ship status: ${resultForPirateShip}`)
            console.log(`Warship status: ${sumForWarShip}`)
        }
    }


}
manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ])