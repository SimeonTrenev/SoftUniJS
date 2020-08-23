function pirates(array){

    let object = {};

    let command = array.shift().split('||')
    while(command[0] !== 'Sail'){
        let city = command[0]
        let population = Number(command[1])
        let gold = Number(command[2])
        
        if(!object.hasOwnProperty(city)){
            object[city] = {population,gold}
        }else{
            object[city].population += population
            object[city].gold += gold
        }
        command = array.shift().split('||')
    }
    
    for(let elements of array){
        let currentCommands = elements.split('=>')
        let command = currentCommands[0]
        
        if(command === 'Plunder'){
            let city = currentCommands[1]
            let population = Number(currentCommands[2])
            let gold = Number(currentCommands[3])

            object[city].population -= population
            object[city].gold -= gold
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            if(object[city].population <= 0 || object[city].gold <= 0){
                console.log(`${city} has been wiped off the map!`)
                delete object[city];
            }
        }else if(command === 'Prosper'){
            let city = currentCommands[1]
            let gold = Number(currentCommands[2])

            if(gold >= 0){
                object[city].gold += gold
                console.log(`${gold} gold added to the city treasury. ${city} now has ${object[city].gold} gold.`)
            }else{
                console.log(`Gold added cannot be a negative number!`)
            }
        }else if(command === 'End'){
            let iterated = Object.entries(object).sort((a,b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]))
            if(iterated.length > 0){
                console.log(`Ahoy, Captain! There are ${iterated.length} wealthy settlements to go to:`)
            for(let elements of iterated){
                console.log(`${elements[0]} -> Population: ${elements[1].population} citizens, Gold: ${elements[1].gold} kg`)
            }
        }else{
            console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
        }
        break;
        }
    }
    
}
pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ])