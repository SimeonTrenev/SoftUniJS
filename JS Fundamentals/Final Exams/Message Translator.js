function messageTranslator(input) {
 
    let numberOfChecks = Number(input.shift());
    
    let pattern = /(\!)(?<command>[A-Z][a-z]{2,})\1:\[(?<message>[A-Za-z]{8,})\]/g
    
    for(let i = 0; i < numberOfChecks;i++){
        let currentText = input[i];
        let match = pattern.exec(currentText)
    
        if(match){
            let command = match.groups.command;
            let message = match.groups.message;
    
            let asciiValue = '';
            for(let chars of message){
                let currentChar = chars.charCodeAt(0);
                asciiValue += `${currentChar} `
            }
            console.log(`${command}: ${asciiValue}`)
        }else{
            console.log(`The message is invalid`)
        }
    }
     
    }
messageTranslator([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ])