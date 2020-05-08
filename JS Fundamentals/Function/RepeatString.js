function repeatString(string, numberOfRepeats){

    let sum = '';
    for(let i = 0; i < numberOfRepeats;i++){
        sum += string
    }
    return sum
}
let result = repeatString('abc', 3)
console.log(result)