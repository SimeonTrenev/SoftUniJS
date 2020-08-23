function messangerManager(array){

    let limitForMessages = Number(array.shift())
    let object = {};

    for(let elements of array){
        let currentCommands = elements.split('=')
        let command = currentCommands[0];
        let username = currentCommands[1];

        if(command === 'Add'){
            let sentMessages = Number(currentCommands[2])
            let recievedMessages = Number(currentCommands[3])

            if(!object.hasOwnProperty(username)){
                object[username] = {sentMessages,recievedMessages}
            }
        }else if(command === 'Message'){
            let sender = username;
            let receiver = currentCommands[2]

            if(object.hasOwnProperty(sender) && object.hasOwnProperty(receiver)){
                object[sender].sentMessages += 1;
                object[receiver].recievedMessages +=1;
                if(object[sender].sentMessages + object[sender].recievedMessages >= limitForMessages){
                    console.log(`${sender} reached the capacity!`)
                    delete object[sender]
                }
                if(object[receiver].sentMessages + object[receiver].recievedMessages >= limitForMessages){
                    console.log(`${receiver} reached the capacity!`)
                    delete object[receiver]
                }
            }
        }else if(command === 'Empty'){
            if(object.hasOwnProperty(username)){
                delete object[username];
            }else if(username === 'All'){
                object = {}
            }
        }else if(command === 'Statistics'){
            let sorted = Object.entries(object).sort((a,b) => b[1].recievedMessages - a[1].recievedMessages || a[0].localeCompare(b[0]))

            console.log(`Users count: ${sorted.length}`)
            for(let messages of sorted){
                console.log(`${messages[0]} - ${messages[1].sentMessages + messages[1].recievedMessages}`)
            }
        }

    }

}
messangerManager([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
  ])