function emailValidator(array) {
 
    let email = array.shift();

    for(let elements of array){
        let [command, firstParameter, secondParameter] = elements.split(' ')
        
        if(command === 'Make'){
            let upperOrLowerCase = firstParameter;

            if(upperOrLowerCase === 'Upper'){
                email = email.toUpperCase()
            }else{
                email = email.toLowerCase()
            }
            console.log(email)
        }else if(command === 'GetDomain'){
            let count = Number(firstParameter);

            console.log(email.substring(email.length - count))
        }else if(command === 'GetUsername'){
            if(email.includes('@')){
                let index = email.indexOf('@')
                let substring = email.substring(0,index)
                console.log(substring)
            }else{
                console.log(`The email ${email} doesn't contain the @ symbol.`)
            }
        }else if(command === 'Replace'){
            let char = firstParameter;
            while(email.includes(char)){
                email = email.replace(char,'-')
            }
            console.log(email)
        }else if(command === 'Encrypt'){
            let asciiValue = '';
            for(let char of email){
                let currentChar = char.charCodeAt(0)
                asciiValue += currentChar + ' '
            }
            console.log(asciiValue)
        }else if(command === 'Complete'){
            break;
        }
    }

 
}
emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
  ])