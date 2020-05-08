function solve(commands) {
    let arr = commands
    .shift()
    .split(' ')
    .map(Number)

    for(let i = 0; i < commands.length;i++){
        let[comand, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        switch(comand){
            case 'Add':
                add(firstNum)
            break;
            case 'Remove':
                remove(firstNum)
            break;
            case 'RemoveAt':
                removeAt(firstNum)
            break;
            case 'Insert':
                insert(firstNum,secondNum)
            break
        }
    }
    function add(x){
        arr.push(x)
    }
    
    function remove(num){
        arr = arr.filter(x => x !== num)
    }
    
    function removeAt(index){
        arr.splice(index,1)
    }
    
    function insert(x,index){
        arr.splice(index,0,x)
    }
    console.log(arr.join(' '))
}
solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])



