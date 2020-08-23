function stringManipulator(array){

    let manipulatedString = array.shift();

    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0]

        if(command === 'Change'){
            let char = currentCommands[1]
            let replacement = currentCommands[2];

            while(manipulatedString.includes(char)){
                manipulatedString = manipulatedString.replace(char,replacement)
            }
            console.log(manipulatedString)
        }else if(command === 'Includes'){
            let string = currentCommands[1];

            if(manipulatedString.includes(string)){
                console.log('True')
            }else{
                console.log('False')
            }
        }else if(command === 'End'){
            let string = currentCommands[1]

            if(manipulatedString.endsWith(string)){
                console.log('True')
            }else{
                console.log('False')
            }
        }else if(command === 'Uppercase'){
            manipulatedString = manipulatedString.toUpperCase();
            console.log(manipulatedString)
        }else if(command === 'FindIndex'){
            let char = currentCommands[1];

            let index = manipulatedString.indexOf(char)
            console.log(index)
        }else if(command === 'Cut'){
            let startIndex = Number(currentCommands[1])
            let length = Number(currentCommands[2]);

            let substr = manipulatedString.substr(startIndex,length)

            manipulatedString = substr
            
            console.log(manipulatedString)
        }else if(command === 'Done'){
            break;
        }
    }

}
stringManipulator([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ])