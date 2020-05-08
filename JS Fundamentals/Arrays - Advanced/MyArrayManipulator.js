function manipulator(arrayOfInteger = [], arrayOfCommands = []){

    let manipulatedArray = arrayOfInteger.slice()
    
    for(let i = 0; i < arrayOfCommands.length;i++){
        let comanded = arrayOfCommands[i].split(' ')
        let comand = comanded[0]
        let index = comanded[1]
        let element = comanded[2]
        
        switch(comand){
            case 'add':
            manipulatedArray.splice(index,0,element)
            break;
            case 'addMany':
                manipulatedArray.splice(index,0,element)
            break;
            case 'contains':
            if(manipulatedArray.includes(index)){
                console.log(manipulatedArray.indexOf(index))
            }else{
                console.log('-1')
            }
            break;
            case 'remove':
            manipulatedArray.splice(index,1)
            break;
            case 'shift':
            for(let i = 0; i < index;i++){
                let added = manipulatedArray.shift();
                manipulatedArray.push(added)
            }
            break;
            case 'sumPairs':
            manipulatedArray.map((a,b)=> a + b)
            break;
            case 'print':
            return `[ ${manipulatedArray.join(', ')} ]`
            break;
        }
    }
        
}
console.log(manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
    ))
   