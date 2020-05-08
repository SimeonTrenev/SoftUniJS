function login(password){
    let username = password.shift()
    let newStringe = username.split('').reverse()
    let joinArray = newStringe.join('')
    let comand = password.shift()
    let flagged = false;
    let counter = 0;
    while(comand !== joinArray){
        counter++;
        if(counter === 4){
            console.log(`User ${username} blocked!`)
            break;
        }
        console.log('Incorrect password. Try again.')
        comand = password.shift()
        if(comand === joinArray){
            flagged = true;
            break;
        }
    }
    if(flagged || comand === joinArray){
        console.log(`User ${username} logged in.`)
    }
}
login(['momo', 'omom'])