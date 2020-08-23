function stringMani(array){

    let word = array.shift();

    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0];

        if(command === 'Translate'){
            let char = currentCommands[1]
            let replacement = currentCommands[2];

            while(word.includes(char)){
                word = word.replace(char,replacement)
            }
            console.log(word)
        }else if(command === 'Includes'){
            let string = currentCommands[1];

            if(word.includes(string)){
                console.log('True')
            }else{
                console.log('False')
            }
        }else if(command === 'Start'){
            let string = currentCommands[1];

            if(word.startsWith(string)){
                console.log('True')
            }else{
                console.log('False')
            }
        }else if(command === 'Lowercase'){
            word = word.toLowerCase();
            console.log(word)
        }else if(command === 'FindIndex'){
            let char = currentCommands[1];

            let lastIndex = word.lastIndexOf(char);
            console.log(lastIndex)
        }else if(command === 'Remove'){
            let startIndex = Number(currentCommands[1])
            let count = Number(currentCommands[2]);

            let removed = word.substr(startIndex,count)
            while(word.includes(removed)){
                word = word.replace(removed,'')
            }
            console.log(word)
        }else if(command === 'End'){
            break;
        }
    }

}
stringMani([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
  ])