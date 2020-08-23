function heroes(array){


    let numberOfHeroes = Number(array.shift());
    let object = {};
    
    for(let i = 0; i < numberOfHeroes;i++){
        let [heroName, hitPoints, manaPoints] = array[i].split(' ')
        hitPoints = Number(hitPoints)
        manaPoints = Number(manaPoints)

        if(!object.hasOwnProperty(heroName)){
            object[heroName] = {hitPoints, manaPoints}
        }
    }
    
    for(let elements of array.slice(numberOfHeroes)){
        let currentCommands = elements.split(' - ');
        let command = currentCommands[0];
        let heroName = currentCommands[1];
        
        if(command === 'CastSpell'){
            let manaPoints = Number(currentCommands[2])
            let spellName = currentCommands[3];

            if(object[heroName].manaPoints >= manaPoints){
                object[heroName].manaPoints -= manaPoints
                console.log(`${heroName} has successfully cast ${spellName} and now has ${object[heroName].manaPoints} MP!`)
            }else{
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }
        }else if(command === 'TakeDamage'){
            let damage = Number(currentCommands[2])
            let attacker = currentCommands[3]

            object[heroName].hitPoints -= damage;

            if(object[heroName].hitPoints > 0){
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${object[heroName].hitPoints} HP left!`)
            }else{
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete object[heroName];
            }
        }else if(command === 'Recharge'){
            let amount = Number(currentCommands[2])

            if(object[heroName].manaPoints + amount > 200){
                console.log(`${heroName} recharged for ${200 - object[heroName].manaPoints} MP!`)
                object[heroName].manaPoints = 200;
            }else{
                
                console.log(`${heroName} recharged for ${amount} MP!`)
                object[heroName].manaPoints += amount
            }
        }else if(command === 'Heal'){
            let amount = Number(currentCommands[2])

            if(object[heroName].hitPoints + amount > 100){
                console.log(`${heroName} healed for ${100 - object[heroName].hitPoints} HP!`)
                object[heroName].hitPoints = 100;
            }else{
                
                console.log(`${heroName} healed for ${amount} HP!`)
                object[heroName].hitPoints += amount
            }
        }else if(command === 'End'){
            
            let iterated = Object.entries(object).sort((a,b) => b[1].hitPoints - a[1].hitPoints || a[0].localeCompare(b[0]))

            for(let heroes of iterated){
                console.log(heroes[0])
                console.log(`  HP: ${heroes[1].hitPoints}`)
                console.log(`  MP: ${heroes[1].manaPoints}`)
            }
            break;
        }

    }


}
heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ])