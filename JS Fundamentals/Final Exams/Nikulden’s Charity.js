function nikuldensCharity(array){

    let message = array.shift();
    
    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0]

        if(command === 'Replace'){
            let currentChar = currentCommands[1]
            let newChar = currentCommands[2]

            while(message.includes(currentChar)){
                message = message.replace(currentChar,newChar)
            }
            console.log(message)
        }else if(command === 'Cut'){
            let startIndex = Number(currentCommands[1])
            let endIndex = Number(currentCommands[2])

            if(message.includes(message[startIndex]) && message.includes(message[endIndex])){
                let removed = message.substring(startIndex,endIndex + 1)
                message = message.replace(removed,'')
                console.log(message)
            }else{
                console.log(`Invalid indexes!`)
            }
        }else if(command === 'Make' && currentCommands[1] === 'Upper'){
            message = message.toUpperCase();
            console.log(message)
        }else if(command === 'Make' && currentCommands[1] === 'Lower'){
            message = message.toLowerCase();
            console.log(message)
        }else if(command === 'Check'){
            let string = currentCommands[1]

            if(message.includes(string)){
                console.log(`Message contains ${string}`)
            }else{
                console.log(`Message doesn't contain ${string}`)
            }
        }else if(command === 'Sum'){
            let startIndex = Number(currentCommands[1])
            let endIndex = Number(currentCommands[2])

            if(message.includes(message[startIndex]) && message.includes(message[endIndex])){
            let substring = message.substring(startIndex,endIndex + 1)
            let asciiSum = 0;
            for(let chars of substring){
                let asciiValue = chars.charCodeAt(0)
                asciiSum += asciiValue
            }
            console.log(asciiSum)
            }else{
                console.log(`Invalid indexes!`)
            }

        }else if(command === 'Finish'){
            break;
        }
    }

}
nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ])

//   function solve(input) {
 
//     let message = input.shift();
  
//     for(let elements of input){
//         let currentCommands = elements.split(' ')
//         let command = currentCommands[0]
  
//         if(command === 'Replace'){
//             let currentChar = currentCommands[1]
//             let newChar = currentCommands[2];
  
//             while(message.includes(currentChar)){
//                 message = message.replace(currentChar,newChar)
//             }
//             console.log(message)
//         }else if(command === 'Cut'){
//             let startIndex = Number(currentCommands[1]);
//             let endIndex = Number(currentCommands[2]);
  
//             let substring = message.substring(startIndex,endIndex + 1);
  
//             if(message.includes(message[startIndex]) && message.includes(message[endIndex])){
//               message = message.replace(substring,'')
//               console.log(message)
//             }else{
//                 console.log(`Invalid indexes!`)
//             }
//         }else if(command === 'Make'){
//             let upperOrLowerCase = currentCommands[1];
  
//             if(upperOrLowerCase === 'Upper'){
//                 message = message.toUpperCase()
//             }else{
//                 message = message.toLowerCase()
//             }
//             console.log(message)
//         }else if(command === 'Check'){
//             let string = currentCommands[1];
  
//             if(message.includes(string)){
//                 console.log(`Message contains ${string}`)
//             }else{
//                 console.log(`Message doesn't contain ${string}`)
//             }
//         }else if(command === 'Sum'){
//             let startIndex = Number(currentCommands[1]);
//             let endIndex = Number(currentCommands[2]);
  
//             if(message.includes(message[startIndex]) && message.includes(message[endIndex])){
//               let substring = message.substring(startIndex,endIndex + 1)
//               let sum = 0;
//               for(let chars of substring){
//                   let currentCharAscii = chars.charCodeAt(0)
//                   sum += currentCharAscii
//               }
//               console.log(sum)
//             }else{
//                 console.log(`Invalid indexes!`)
//             }
//         }else if(command === 'Finish'){
//             break;
//         }
//     }
   
//   }