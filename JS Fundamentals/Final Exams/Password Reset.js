function passwordReset(array){

    let startPassword = array.shift();
    let rawPassword = '';
    
    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0]
        
        if(command === 'TakeOdd'){
            for(let i = 1; i < startPassword.length;i+=2){
                let currentChar = startPassword[i]
                rawPassword += currentChar
            }
            startPassword = rawPassword
            console.log(startPassword)
        }else if(command === 'Cut'){
            let index = Number(currentCommands[1])
            let length = Number(currentCommands[2])

            let substring = startPassword.substring(index,index + length)
            startPassword = startPassword.replace(substring,'');
            console.log(startPassword)
        }else if(command === 'Substitute'){
            let substring = currentCommands[1]
            let substitute = currentCommands[2]
            let tempPassword = startPassword

            while(tempPassword.includes(substring)){
                tempPassword = tempPassword.replace(substring,substitute)
            }
            
            if(startPassword.includes(substring)){
                console.log(tempPassword)
            }else{
                console.log(`Nothing to replace!`)
            }
            startPassword = tempPassword
            
        }else if(command === 'Done'){
            
            break;
        }
    }
    console.log(`Your password is: ${startPassword}`)

}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ])

//   function solve(input){

//     let password = input.shift();

//     for(let elements of input){
//         let [command, firstParameter, secondParameter] = elements.split(' ')
        
//         if(command === 'TakeOdd'){
//             password = takeOdd(password)
//         }else if(command === 'Cut'){
//             let index = Number(firstParameter);
//             let length = Number(secondParameter);
//             password = cut(password,index,length)
//         }else if(command === 'Substitute'){
//             let substring = firstParameter;
//             let replaced = secondParameter;
//             password = substitute(password,substring,replaced)
//         }else if(command === 'Done'){
//             console.log(`Your password is: ${password}`)
//             break;
//         }
//     }

//     function takeOdd(password){
//         let charConcated = ''
//         for(let i = 1; i < password.length;i+=2){
//             let currentChar = password[i]
//             charConcated += currentChar
//         }
//         password = charConcated
//         console.log(password)
//         return password
//     }

//     function cut(password,index,length){
//         let substring = password.substring(index,index + length)
//         password = password.replace(substring,'')
//         console.log(password);
//         return password
//     }

//     function substitute(password,substring,replaced){
//         if(password.includes(substring)){
//             while(password.includes(substring)){
//                 password = password.replace(substring,replaced)
//             }
//             console.log(password)
//         }else{
//             console.log(`Nothing to replace!`)
//         }
//         return password
//     }

// }