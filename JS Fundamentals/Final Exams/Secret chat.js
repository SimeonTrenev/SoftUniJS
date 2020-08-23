function solve(array){

    let message = array.shift();
    
    for(let elements of array){
        let currentCommands = elements.split(':|:')
        let command = currentCommands[0]

        if(command === 'InsertSpace'){
            let index = Number(currentCommands[1])
            let firstPart = message.substring(0,index)
            let secondPart = message.substring(index)
            message = firstPart + ' ' + secondPart

            console.log(message)
        }else if(command === 'Reverse'){
            let substring = currentCommands[1]
            if(message.includes(substring)){
                let index = message.indexOf(substring)
                let secondPart = message.substring(index,index + substring.length)
                .split('')
                .reverse()
                .join('');

                let firstPart = message.substring(0,index)
                let thirdPart = message.substring(index + substring.length)
                message = firstPart + thirdPart + secondPart
                console.log(message)
                
            }else{
                console.log('error')
            }
        }else if(command === 'ChangeAll'){
            let substring = currentCommands[1]
            let replacement = currentCommands[2]
            while(message.includes(substring)){
                let index = message.indexOf(substring)
                let part = message.substring(index,index + substring.length);
                message = message.replace(part,replacement)
            }
            console.log(message)
        }else if(command === 'Reveal'){
            console.log(`You have a new text message: ${message}`)
            break;
        }
    }

}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])


//   function solve(input){

//     let message = input.shift();

//     input.forEach(elements => {
//         let currentCommand = elements.split(':|:')
//         let command = currentCommand[0];

//         if(command === 'InsertSpace'){
//             let index = Number(currentCommand[1]);
//             message = insertSpase(message,index)
//         }else if(command === 'Reverse'){
//             let substring = currentCommand[1];
//             message = reverse(message,substring)
//         }else if(command === 'ChangeAll'){
//             let substring = currentCommand[1];
//             let replacement = currentCommand[2];

//             message = changeAll(message,substring,replacement)
//         }else if(command === 'Reveal'){
//             message = reveal(message)
//             return;
//         }
//     });

//     function insertSpase(string,index){

//         let firstPart = string.substring(0,index)
//         let secondPart = string.substring(index)
//         string = firstPart + ' ' + secondPart
//         console.log(string)
//         return string;
//     }

//     function reverse(string,substring){
//         if(string.includes(substring)){
//             let index = string.indexOf(substring)
//             let lastPart = string.substring(index,index + substring.length).split('').reverse().join('');
//             let firstPart = string.substring(0,index)
//             let secondPart = string.substring(index + substring.length);
//             string = firstPart + secondPart + lastPart
//             console.log(string)
            
//         }else{
//             console.log('error')
//         }
//         return string;
//     }

//     function changeAll(string,substring,replacement){
//         while(string.includes(substring)){
//             string = string.replace(substring,replacement)
//         }
//         console.log(string);
//         return string
//     }
    
//     function reveal(string){
//         console.log(`You have a new text message: ${string}`)
//     }

// }