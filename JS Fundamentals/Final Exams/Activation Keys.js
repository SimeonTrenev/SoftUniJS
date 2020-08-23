function activationKeys(array){

    let rawKey = array.shift();
    
    for(let elements of array){
        let currentCommands = elements.split('>>>')
        let command = currentCommands[0]

        if(command === 'Contains'){
            let substring = currentCommands[1]
            
            if(rawKey.includes(substring)){
                console.log(`${rawKey} contains ${substring}`)
            }else{
                console.log(`Substring not found!`)
            }
        }else if(command === 'Flip'){
            let upperOrLower = currentCommands[1]
            let startIndex = Number(currentCommands[2])
            let endIndex = Number(currentCommands[3])
            
            if(upperOrLower === 'Upper'){
                let secondPart = rawKey.substring(startIndex,endIndex).toUpperCase()
                let firstPart = rawKey.substring(0,startIndex)
                let thirdPart = rawKey.substring(endIndex)
                rawKey = firstPart + secondPart + thirdPart
                
            }else if(upperOrLower === 'Lower'){
                let secondPart = rawKey.substring(startIndex,endIndex).toLowerCase()
                let firstPart = rawKey.substring(0,startIndex)
                let thirdPart = rawKey.substring(endIndex)
                rawKey = firstPart + secondPart + thirdPart
            }
            console.log(rawKey)
        }else if(command === 'Slice'){
            let startIndex = Number(currentCommands[1])
            let endIndex = Number(currentCommands[2])

            secondPart = rawKey.slice(startIndex,endIndex)
            for(let i = 0 ; i < secondPart.length;i++){
                let currentChar = secondPart[i]
                if(rawKey.includes(currentChar)){
                    rawKey = rawKey.replace(currentChar,'')
                }
            }
            
            console.log(rawKey)
        }else if(command === 'Generate'){
            console.log(`Your activation key is: ${rawKey}`)
            break;
        }
    }



}
activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ])

//   function activationKeys(array){

//     let rawKey = array.shift();
    
//     for(let elements of array){
//         let currentCommands = elements.split('>>>')
//         let command = currentCommands[0]

//         if(command === 'Contains'){
//             let substring = currentCommands[1]
            
//             if(rawKey.includes(substring)){
//                 console.log(`${rawKey} contains ${substring}`)
//             }else{
//                 console.log(`Substring not found!`)
//             }
//         }else if(command === 'Flip'){
//             let upperOrLower = currentCommands[1]
//             let startIndex = Number(currentCommands[2])
//             let endIndex = Number(currentCommands[3])
            
//             if(upperOrLower === 'Upper'){
//                 let secondPart = rawKey.substring(startIndex,endIndex).toUpperCase()
//                 let firstPart = rawKey.substring(0,startIndex)
//                 let thirdPart = rawKey.substring(endIndex)
//                 rawKey = firstPart + secondPart + thirdPart
                
//             }else if(upperOrLower === 'Lower'){
//                 let secondPart = rawKey.substring(startIndex,endIndex).toLowerCase()
//                 let firstPart = rawKey.substring(0,startIndex)
//                 let thirdPart = rawKey.substring(endIndex)
//                 rawKey = firstPart + secondPart + thirdPart
//             }
//             console.log(rawKey)
//         }else if(command === 'Slice'){
//             let startIndex = Number(currentCommands[1])
//             let endIndex = Number(currentCommands[2])

//             secondPart = rawKey.slice(startIndex,endIndex)
//             if(rawKey.includes(secondPart)){
//                 rawKey = rawKey.replace(secondPart,'')
//             }
//             console.log(rawKey)
//         }else if(command === 'Generate'){
//             console.log(`Your activation key is: ${rawKey}`)
//             break;
//         }
//     }



// }

// function solve(input){

//     let rawKey = input.shift();
    
//     for(let elements of input){
//         let currentCommands = elements.split('>>>')
//         let command = currentCommands[0];
    
//         if(command === 'Contains'){
//             let substring = currentCommands[1];
    
//             rawKey = contains(rawKey,substring)
//         }else if(command === 'Flip'){
//             let upperOrLower = currentCommands[1];
//             let startIndex = Number(currentCommands[2]);
//             let endIndex = Number(currentCommands[3]);
    
//             rawKey = flip(rawKey,upperOrLower,startIndex,endIndex)
//         }else if(command === 'Slice'){
//             let startIndex = Number(currentCommands[1]);
//             let endIndex = Number(currentCommands[2]);
    
//             rawKey = slice(rawKey,startIndex,endIndex)
//         }else if(command === 'Generate'){
//             console.log(`Your activation key is: ${rawKey}`);
//             break;
//         }
//     }
    
//     function contains(rawKey,substring){
//         if(rawKey.includes(substring)){
//             console.log(`${rawKey} contains ${substring}`)
//         }else{
//             console.log(`Substring not found!`)
//         }
//         return rawKey
//     }
       
//     function flip(rawKey,upperOrLower,startIndex,endIndex){
//         let substring = rawKey.substring(startIndex,endIndex)
//         if(upperOrLower === 'Upper'){
//             substring = substring.toUpperCase()
//         }else{
//             substring = substring.toLowerCase()
//         }
//         let firstPart = rawKey.substring(0,startIndex)
//         let lastPart = rawKey.substring(endIndex)
//         rawKey = firstPart + substring + lastPart
//         console.log(rawKey);
//         return rawKey
//     }
    
//     function slice(rawKey,startIndex,endIndex){
//         let sliced = rawKey.substring(startIndex,endIndex)
        
//         rawKey = rawKey.replace(sliced,'');
//         console.log(rawKey);
//         return rawKey
//     }
    
    
//     }