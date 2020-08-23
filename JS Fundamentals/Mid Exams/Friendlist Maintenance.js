function frielistMaintenance(arr){

    let array = arr.slice();
    let friendList = array.shift().split(', ');
    let blackListedCounter = 0;
    let lostNamesCounter = 0;
    
    for(let elements of array){
        let allComands = elements.split(' ');
        let comand = allComands[0];
        let index = allComands[1];
        

        if(comand === 'Blacklist'){
            if(friendList.includes(index)){
                let currentIndex = friendList.indexOf(index);
                friendList[currentIndex] = 'Blacklisted';
                console.log(`${index} was blacklisted.`);
                blackListedCounter++;
            }else{
                console.log(`${index} was not found.`);
            }
        }else if(comand === 'Error'){
            index = Number(index);
            if(friendList[index] !== 'Blacklisted' && friendList[index] !== 'Lost'){
                let username = friendList[index];
                console.log(`${username} was lost due to an error.`);
                friendList[index] = 'Lost';
                lostNamesCounter++;
            }
        }else if(comand === 'Change'){
            index = Number(index);
            let newName = allComands[2]

            if(friendList.includes(friendList[index])){
                console.log(`${friendList[index]} changed his username to ${newName}.`)
                friendList[index] = newName;
            }
        }else if(comand === 'Report'){
            console.log(`Blacklisted names: ${blackListedCounter}`)
            console.log(`Lost names: ${lostNamesCounter}`)
            console.log(friendList.join(' '))
        }
    }
    

}
frielistMaintenance([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
  ])