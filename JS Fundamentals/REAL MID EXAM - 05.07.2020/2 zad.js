function solve(input){

    let array = input.slice();
    let modifiedArray = array.shift().split(' ').map(Number)
    
    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0]
        let firstIndex = Number(currentCommands[1])
        let secondIndex = Number(currentCommands[2])

        if(command === 'swap'){
            let firstIndexValue = modifiedArray[firstIndex]
            modifiedArray[firstIndex] = modifiedArray[secondIndex]
            modifiedArray[secondIndex] = firstIndexValue
        }else if(command === 'multiply'){
            modifiedArray[firstIndex] = modifiedArray[firstIndex] * modifiedArray[secondIndex]
        }else if(command === 'decrease'){
            let mapped = modifiedArray.map((x) => x - 1)
            modifiedArray = mapped
        }else if(command === 'end'){
            console.log(modifiedArray.join(', '))
            break;
        }
    }


}
solve([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])