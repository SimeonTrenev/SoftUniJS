function solve(input){

    let message = input.shift();

    for(let elements of input){
        let currentCommands = elements.split(':')
        let command = currentCommands[0]

        if(command === 'Add Stop'){
            let index = Number(currentCommands[1])
            let string = currentCommands[2]

            if(message.includes(message[index])){
                let firstPart = message.substring(0,index)
                let lastPart = message.substring(index)
                message = firstPart + string + lastPart
            }
            console.log(message)
        }else if(command === 'Remove Stop'){
            let startIndex = Number(currentCommands[1])
            let endIndex = Number(currentCommands[2])
            // let substring = message.substring(startIndex,endIndex + 1);

            if(message.includes(message[startIndex]) && message.includes(message[endIndex])){
                let firstPart = message.substring(0,startIndex)
                let lastPart = message.substring(endIndex + 1)
                message = firstPart + lastPart
                // message = message.replace(substring,'')
            }
            console.log(message)
        }else if(command === 'Switch'){
            let oldString = currentCommands[1]
            let newString = currentCommands[2]
            
            if(message.includes(oldString)){
                message = message.replace(oldString,newString)
            
        }
            console.log(message)
        }else if(command === 'Travel'){
            
            break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${message}`)

}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ])