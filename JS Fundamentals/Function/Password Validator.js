function passwordValidator(string){
    let truttyCount = 0;
    let passLength = function(str){
        if(str.length >= 6 && str.length <= 10){
            truttyCount++;
            return true;
        }else{
            return "Password must be between 6 and 10 characters";
        }
    }

    let onlyLettersAndDigits = function(str){
        let isOnly = true;
        for(let i = 0; i < str.length;i++){
            let currentDigit = str[i].charCodeAt(0)
            if(currentDigit >= 48 && currentDigit <= 57 ||
                currentDigit >= 65 && currentDigit <= 90 ||
                currentDigit >= 97 && currentDigit <= 122){
                }else{
                    isOnly = false;
                    return "Password must consist only of letters and digits";
                }
        }
        if(isOnly){
            truttyCount++;
            return true;
        }
    }

    let atLeastTwoDigits = function(str){
        let counter = 0;
        let isDigit = false;
        for(let i = 0; i < str.length;i++){
            let current = Number(str[i])
            if(!isNaN(current)){
                counter++;
            }
            if(counter === 2){
                isDigit = true;
                break;
            }
        }
        if(isDigit){
            truttyCount++;
            return true;
        }else{
            return "Password must have at least 2 digits"
        }
    } 
    
    let firstTest = passLength(string)
    
    let secondTest = onlyLettersAndDigits(string)
    
    let thirdTest = atLeastTwoDigits(string)
   
    if(truttyCount === 3){
        console.log('Password is valid')
    }else{
        if(firstTest === true){
            
        }else{
            console.log(firstTest)
        }
        if(secondTest === true){

        }else{
            console.log(secondTest)
        }
        if(thirdTest === true){

        }else{
            console.log(thirdTest)
        }
    
    }

}
passwordValidator('Pa$s$s')