function inboxManager(array){


    let object = {};

    for(let elements of array){
        let [command, username, email] = elements.split('->')
        
        if(command === 'Add'){
            if(!object.hasOwnProperty(username)){
                object[username] = []
            }else{
                console.log(`${username} is already registered`)
            }
        }else if(command === 'Send'){
            object[username].push(email)
        }else if(command === 'Delete'){
            if(object.hasOwnProperty(username)){
                delete object[username];
            }else{
                console.log(`${username} not found!`)
            }
        }else if(command === 'Statistics'){
            let iterated = Object.entries(object).sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))

            console.log(`Users count: ${iterated.length}`)
            for(let users of iterated){
                console.log(`${users[0]}`)
                for(let emails of users[1]){
                    console.log(`- ${emails}`)
                }
            }
        }


    }
   
}
inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ])