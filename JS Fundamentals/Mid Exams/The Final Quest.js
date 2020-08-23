function theFinalQuest(arr){

    let array = arr.slice();
    let message = array.shift().split(' ')
    
    for(let elements of array){
        let currentComands = elements.split(' ')
       let comand = currentComands[0];
       let currentWord = currentComands[1];

       if(comand === 'Delete'){
           let index = Number(currentComands[1]);
           if(message.includes(message[index + 1])){
               message.splice(index + 1,1);
           }
       }else if(comand === 'Swap'){
           let secondWord = currentComands[2];
            if(message.includes(currentWord) && message.includes(secondWord)){
                let indexOfCurrentWord = message.indexOf(currentWord);
                let secondWordIndex = message.indexOf(secondWord);
                message[indexOfCurrentWord] = secondWord
                message[secondWordIndex] = currentWord
            }
       }else if(comand === 'Put'){
           let index = Number(currentComands[2])
           if(index >= 1 && index - 1 <= message.length){
               message.splice(index - 1,0,currentWord)
           }
       }else if(comand === 'Sort'){
           message.sort((a,b)=>b.localeCompare(a));
       }else if(comand === 'Replace'){
           let secondWord = currentComands[2];
           if(message.includes(secondWord)){
               let indexOfSecondWord = message.indexOf(secondWord)
               message.splice(indexOfSecondWord,1,currentWord)
           }
       }else if(comand === 'Stop'){
           console.log(message.join(' '))
           break;
       }
    }


}
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
  ])