function solve(integer, commands){

    function add(arr,tokens){
        arr.splice(tokens[0],0,tokens[1])
        return arr
    }

    function addMany(arr,tokens){
        
        let index = tokens.shift()
        for(let value of tokens){
            arr.splice(index++,0,value)
        }
        return arr
    }

    function remove(arr,tokens){
        arr.splice(Number(tokens[0]),1)
        return arr
    }

    function shift(arr,tokens){
        let pos = Number(tokens[0])
        while(pos > 0){
            let el = arr.shift()
            arr.push(el);
            pos--;
            return arr; 
        }
    }

    function sumPairs(arr){
        let output = []
        while(arr.length > 0){
            let a = arr.shift() || 0
            let b = arr.shift() || 0
            output.push(a + b)
        }
        return output
    }

    let currentCommand = commands.shift()

    while(currentCommand !== 'print'){
        let tokens = currentCommand.split(' ')

        switch(tokens.shift()){
            case 'add':
            integer = add(integer,tokens)
            break;
            case 'addMany':
            integer = addMany(integer,tokens)
            break;
            case 'contains':
            console.log(integer.indexOf(Number(tokens[0])))
            break;
            case 'remove':
            integer = remove(integer,tokens)
            break;
            case 'shift':
            integer = shift(integer,tokens)
            break;
            case 'sumPairs':
            integer = sumPairs(integer)
            break;
        }


        currentCommand = commands.shift()
    }

    return `[ ${integer.join(', ')} ]`
}
console.log(solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    ))