function treasureHunt(arr){

    let array = arr.slice();
    let initialLoot = array.shift().split('|')
    
    
    for(let elements of array){
        let currentComands = elements.split(' ')
        let comand = currentComands[0]
        let index = currentComands[1]
        let result = 0;
        

        if(comand === 'Loot'){
            let pushed = '';
            for(let i = 1; i <= currentComands.length - 1;i++){
                pushed = currentComands[i]
                if(!initialLoot.includes(pushed)){
                    initialLoot.unshift(pushed)
                }
            }
        }else if(comand === 'Drop'){
            index = Number(index);
            if(initialLoot.includes(initialLoot[index])){
                let currentItem = initialLoot[index];
                initialLoot.splice(index,1)
                initialLoot.push(currentItem)
            }
        }else if(comand === 'Steal'){
             index = Number(index)
            if(index <= initialLoot.length){
                let difference = initialLoot.length - index;
                let lostItems = [];
                for(let i = difference;i < initialLoot.length;i++){
                    lostItems.push(initialLoot[i])
                }
                console.log(lostItems.join(', '))
                initialLoot.splice(difference,index)
            }else{
                console.log(initialLoot.join(', '))
                initialLoot.splice(0,initialLoot.length)
            }
        }else if(comand === 'Yohoho!'){
            let countOfLength = 0;
            if(initialLoot.length > 0){
            for(let i = 0;i < initialLoot.length;i++){
                let currentLengthOfItemName = initialLoot[i].length;
                countOfLength += currentLengthOfItemName
            }
            result = (countOfLength / initialLoot.length);
            console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`)
            
        }else{
            console.log(`Failed treasure hunt.`)
        }
        isYohoho = true;
            break;
        }
    }
    


}
treasureHunt([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 7',
    'Yohoho!'
  ])