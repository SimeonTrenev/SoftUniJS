function froggySquad(arr){

    let array = arr.slice();
    let froggNames = array.shift().split(' ');

    for(let elements of array){
        let currentCommands = elements.split(' ');
        let command = currentCommands[0];
        let name = currentCommands[1];

        if(command === 'Join'){
            if(!froggNames.includes(name)){
                froggNames.push(name)
            }
        }else if(command === 'Jump'){
            let index = Number(currentCommands[2]);

            if(!froggNames.includes(name) && froggNames.includes(froggNames[index])){
                froggNames.splice(index,0,name);
            }
        }else if(command === 'Dive'){
            let givenIndex = Number(currentCommands[1]);;
            if(froggNames.includes(froggNames[givenIndex])){
                froggNames.splice(givenIndex,1);
            }
        }else if(command === 'First'){
            let count = Number(currentCommands[1]);
            if(count < froggNames.length){
                let printed = '';
                for(let i = 0; i < count;i++){
                    printed += `${froggNames[i]} `;
                }
                console.log(printed);
            }else{
                console.log(froggNames.join(' '));
            }
        }else if(command === 'Last'){
            let count = Number(currentCommands[1])
            if(count < froggNames.length){
                let printed = '';
                for(let i = froggNames.length - count; i < froggNames.length; i++){
                    printed += `${froggNames[i]} `;
                }
                console.log(printed);
            }else{
                console.log(froggNames.join(' '));
            }
        }else if(command === 'Print' && name === 'Normal'){
            console.log(`Frogs: ${froggNames.join(' ')}`);
            break;
        }else if(command === 'Print' && name === 'Reversed'){
            froggNames.reverse();
            console.log(`Frogs: ${froggNames.join(' ')}`);
            break;
        }
    }


}
froggySquad([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ])