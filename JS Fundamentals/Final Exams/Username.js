function username(array){

    let peshoUsername = array.shift();
    

    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0]

        if(command === 'Case'){
            let variable = currentCommands[1]
            if(variable === 'upper'){
                peshoUsername = peshoUsername.toUpperCase();
            }else{
                peshoUsername = peshoUsername.toLowerCase();
            }
            console.log(peshoUsername)
        }else if(command === 'Reverse'){
            let startIndex = Number(currentCommands[1]);
            let endIndex = Number(currentCommands[2]);

            if(peshoUsername.includes(peshoUsername[startIndex]) && peshoUsername.includes(peshoUsername[endIndex])){
                let substring = peshoUsername.substring(startIndex,endIndex + 1);
                substring = substring.split('').reverse().join('');
                console.log(substring)
            }
        }else if(command === 'Cut'){
            let substring = currentCommands[1]
            if(peshoUsername.includes(substring)){
                peshoUsername = peshoUsername.replace(substring,'');
                console.log(peshoUsername)
            }else{
                console.log(`The word ${peshoUsername} doesn't contain ${substring}.`)
            }
        }else if(command === 'Replace'){
            let char = currentCommands[1]

            while(peshoUsername.includes(char)){
                peshoUsername = peshoUsername.replace(char,'*')
            }
            console.log(peshoUsername)
        }else if(command === 'Check'){
            let char = currentCommands[1];

            if(peshoUsername.includes(char)){
                console.log(`Valid`)
            }else{
                console.log(`Your username must contain ${char}.`)
            }
        }else if(command === 'Sign'){
            break;
        }
    }

}
username([ 'Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ])