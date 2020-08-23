  function wizardPoker (input){
 
    let array = input.slice();
    let deck = array.shift().split(':')
    let myDeck = [];
    
    for(let elements of array){
        let currentCommands = elements.split(' ');
        let command = currentCommands[0];
        let cardName = currentCommands[1];

        if(command === 'Add'){
            if(deck.includes(cardName)){
                myDeck.push(cardName)
            }else{
                console.log(`Card not found.`)
            }
        }else if(command === 'Insert'){
            let index = Number(currentCommands[2]);

            if(deck.includes(cardName) && myDeck.includes(myDeck[index])){
                myDeck.splice(index,0,cardName)
            }else{
                console.log(`Error!`)
            }
        }else if(command === 'Remove'){
            if(myDeck.includes(cardName)){
                let indexOfCard = myDeck.indexOf(cardName)
                myDeck.splice(indexOfCard,1)
            }else{
                console.log(`Card not found.`)
            }
        }else if(command === 'Swap'){
            let secondCardName = currentCommands[2]
            let indexOfFirstCard = myDeck.indexOf(cardName)
            let indexOfSecondCard = myDeck.indexOf(secondCardName)
            myDeck[indexOfFirstCard] = secondCardName;
            myDeck[indexOfSecondCard] = cardName
        }else if(command === 'Shuffle' && cardName === 'deck'){
            myDeck.reverse()
        }else if(command === 'Ready'){
            console.log(myDeck.join(' '))
            break;
        }
    }
    

}
wizardPoker([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
  ])



// function wizardPoker(arr){

//     let array = arr.slice();
//     let arsenalDeck = array.shift().split(':')
//     let myNewDeck = [];
    
//     for(let elements of array){
//         let allComands = elements.split(' ')
//         let comands = allComands[0]
//         let cardName = allComands[1]
        
//         if(comands === 'Add'){
//             if(arsenalDeck.includes(cardName)){
//                 myNewDeck.push(cardName)
//             }else{
//                 console.log('Card not found.')
//             }
//         }else if(comands === 'Insert'){
//             let index = Number(allComands[2])
//             if(arsenalDeck.includes(cardName) && !myNewDeck.includes(cardName)){
//                 if(myNewDeck.includes(myNewDeck[index])){
//                     myNewDeck.splice(index,0,cardName)
//                 }else{
//                     console.log('Error!')
//                 }
//                 }else{
//                     console.log('Error!')
//             }
//         }else if(comands === 'Remove'){
//             if(myNewDeck.includes(cardName)){
//                 let index = myNewDeck.indexOf(cardName)
//                 myNewDeck.splice(index,1)
//             }else{
//                 console.log('Card not found.')
//             }
//         }else if(comands === 'Swap'){
//             let secondCard = allComands[2]
//             let firstIndex = myNewDeck.indexOf(cardName)
//             let secondIndex = myNewDeck.indexOf(secondCard)
//             myNewDeck.splice(firstIndex,1,secondCard)
//             myNewDeck.splice(secondIndex,1,cardName)
//         }else if(comands === 'Shuffle' && cardName === 'deck'){
//             myNewDeck.reverse();
//         }else if(comands === 'Ready'){
//             console.log(myNewDeck.join(' '))
//             break;
//         }
//     }
    

// }