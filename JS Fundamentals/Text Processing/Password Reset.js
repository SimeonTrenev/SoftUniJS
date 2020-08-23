function passwordReset(array){

    let password = array.shift();
    let newPassWord = ''

    for(let elements of array){
        let currentCommands = elements.split(' ');
        let command = currentCommands[0]
        if(command === 'TakeOdd'){
            
            for(let i = 1; i < password.length;i+=2){
                let currentPass = password[i]
                newPassWord += currentPass
            }
            password = newPassWord
            console.log(password)
        }else if(command === 'Cut'){
            let index = Number(currentCommands[1])
            let length = Number(currentCommands[2])
            let occurence = password.substring(index,index + length)
            password = password.replace(occurence,'')
            console.log(password)
        }else if(command === 'Substitute'){
            let substring = currentCommands[1]
            let substitude = currentCommands[2]
            
            if(password.includes(substring)){
            while(password.includes(substring)){
                password = password.replace(substring,substitude)
            }
            console.log(password)
            }else{
                console.log('Nothing to replace!')
            }
            
        }else if(command === 'Done'){
            console.log(`Your password is: ${password}`)
            break;
        }
    }

}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ])