function battleManager(array){

    let object = {};

    for(let elements of array){
        let currentCommands = elements.split(':')
        let command = currentCommands[0]

        if(command === 'Add'){
            let personName = currentCommands[1];
            let health = Number(currentCommands[2]);
            let energy = Number(currentCommands[3]);

            if(!object.hasOwnProperty(personName)){
                object[personName] = {health, energy}
            }else{
                object[personName].health += health;
            }
        }else if(command === 'Attack'){
            let attackerName = currentCommands[1];
            let defenderName = currentCommands[2];
            let damage = Number(currentCommands[3]);

            if(object.hasOwnProperty(attackerName) && object.hasOwnProperty(defenderName)){
                object[defenderName].health -= damage;
                if(object[defenderName].health <= 0){
                    console.log(`${defenderName} was disqualified!`)
                    delete object[defenderName];
                }
                object[attackerName].energy -= 1;
                if(object[attackerName].energy <= 0){
                    console.log(`${attackerName} was disqualified!`)
                    delete object[attackerName];
                }
            }
        }else if(command === 'Delete'){
            let username = currentCommands[1];

            if(username === 'All'){
                object = {};
                continue;
            }

            if(object.hasOwnProperty(username)){
                delete object[username];
            }
            
        }else if(command === 'Results'){
            let sorted = Object.entries(object).sort((a,b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));

            console.log(`People count: ${sorted.length}`);

            for(let peoples of sorted){
                console.log(`${peoples[0]} - ${peoples[1].health} - ${peoples[1].energy}`)
            }
            break;
        }
    }


}
battleManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
  ])