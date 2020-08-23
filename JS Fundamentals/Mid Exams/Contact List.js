function contactList(arr){

    let array = arr.slice();

    let namesArray = array.shift().split(' ');
    
    for(let elements of array){
        let currentComands = elements.split(' ')
        let comand = currentComands[0];
        let contact = currentComands[1]

        if(comand === 'Add'){
            let index = Number(currentComands[2]);
            if(!namesArray.includes(contact)){
                namesArray.push(contact)
            }else{
                if(namesArray.includes(namesArray[index])){
                    namesArray.splice(index,0,contact)
                }
            }
        }else if(comand === 'Remove'){
            let index = Number(currentComands[1])
            if(namesArray.includes(namesArray[index])){
                namesArray.splice(index,1)
            }
        }else if(comand === 'Export'){
            let startIndex = Number(currentComands[1]);
            let count = Number(currentComands[2]);
            let sumOfContacts = '';
            let lengthOfIndex = startIndex + count;
            if(lengthOfIndex <= namesArray.length){
            for(let i = startIndex;i < count + startIndex;i++){
                sumOfContacts += `${namesArray[i]} `
            }
            console.log(sumOfContacts)
        }else{ 
            let currContacts = '';
            for(let i = startIndex; i < namesArray.length;i++){
                currContacts += `${namesArray[i]} `
            }
            console.log(currContacts);
        }
        }else if(comand === 'Print' && contact === 'Normal'){
            console.log(`Contacts: ${namesArray.join(' ')}`)
            break;
        }else if(comand === 'Print' && contact === 'Reversed'){
            namesArray.reverse();
            console.log(`Contacts: ${namesArray.join(' ')}`)
        }
    }



}
contactList([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
  ])