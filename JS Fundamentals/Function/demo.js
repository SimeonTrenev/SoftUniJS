function passwordValidator(password){

    function passwordLength(pass){
        let isValid = true;
        if(password.length < 6 || password.length > 10){
            isValid = false;
        }
        return isValid
    }
    let isValidPassLength = passwordLength(password.length);
    if(!isValidPassLength){
        console.log('Password must be between 6 and 10 characters')
    }
    
    function onlyLettersAndDigitst(password){
        let isValidLettersAndDigits = true;
        
        for(let i = 0; i < password.length;i++){
            let number = password.charCodeAt(i);
        
            if((number >= 97 && number <= 122) || (number >= 65 && number <= 90) ||
            (number >= 48 && number <= 57)){
                continue
            }else{
                return false;
            }
        }
        return true
    }
    let containsOnlyLettersAndDig = onlyLettersAndDigitst(password)
    if(!containsOnlyLettersAndDig){
        console.log('Password must consist only of letters and digits')
    }
    function mustHaveTwoDigits(password){
        
        let counter = 0;
        for(let i = 0; i < password.length;i++){
            let number = password.charCodeAt(i);
            if(number >= 48 && number <= 57){
                counter++;
                if(counter === 2){
                    break;
                }
            }
        }
        return counter === 2 ? true : false;
    }
    let contTwoDigits = mustHaveTwoDigits(password);
    if(!contTwoDigits){
        console.log('Password must have at least 2 digits')
    }

    if(isValidPassLength && containsOnlyLettersAndDig && contTwoDigits){
        console.log('Password is valid')
    }
}
passwordValidator('Pa$s$s')
