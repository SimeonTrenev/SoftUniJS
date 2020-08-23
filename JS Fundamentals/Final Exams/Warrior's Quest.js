function warriorsQuest(array){

    let skill = array.shift();
    

    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0];

        if(command === 'GladiatorStance'){
            skill = skill.toUpperCase();
            console.log(skill)
        }else if(command === 'DefensiveStance'){
            skill = skill.toLowerCase();
            console.log(skill)
        }else if(command === 'Dispel'){
            let index = Number(currentCommands[1])
            let letter = currentCommands[2]

            if(skill.includes(skill[index])){
                skill = skill.replace(skill[index],letter)
                console.log(`Success!`)
            }else{
                console.log(`Dispel too weak.`)
            }
            
        }else if(command === 'Target' && currentCommands[1] === 'Change'){
            let firstSubstring = currentCommands[2]
            let secondSubstring = currentCommands[3]

            while(skill.includes(firstSubstring)){
                skill = skill.replace(firstSubstring,secondSubstring)
            }
            console.log(skill)
        }else if(command === 'Target' && currentCommands[1] === 'Remove'){
            let substring = currentCommands[2];

            while(skill.includes(substring)){
                skill = skill.replace(substring,'')
            }
            console.log(skill)
        }else if(command === 'For' && currentCommands[1] === 'Azeroth'){
            break;
        }else{
            console.log(`Command doesn't exist!`)
        }
    }


}
warriorsQuest([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ])


//   function solve(input){

//     let message = input.shift();
    
//     for(let elements of input){
//         let [command, firstParameter, secondParameter, thirdParameter] = elements.split(' ')
    
//         if(command === 'GladiatorStance'){
//             message = message.toUpperCase()
//             console.log(message)
//         }else if(command === 'DefensiveStance'){
//             message = message.toLowerCase();
//             console.log(message)
//         }else if(command === 'Dispel'){
//             let index = Number(firstParameter);
//             let letter = secondParameter;
    
//             if(message.includes(message[index])){
//                 message = message.replace(message[index],letter)
//                 console.log(`Success!`)
//             }else{
//                 console.log(`Dispel too weak.`)
//             }
//         }else if(command === 'Target' && firstParameter === 'Change'){
//             let substring = secondParameter;
//             let replaced = thirdParameter;
//             while(message.includes(substring)){
//             message = message.replace(substring,replaced)
//             }
//             console.log(message)
//         }else if(command === 'Target' && firstParameter === 'Remove'){
//             let substring = secondParameter;
//             while(message.includes(substring)){
//             message = message.replace(substring,'');
//             }
//             console.log(message)
//         }else if(command === 'For' && firstParameter === 'Azeroth'){
//             break;
//         }else{
//             console.log(`Command doesn't exist!`)
//         }
//     }
    
    
    
//     }