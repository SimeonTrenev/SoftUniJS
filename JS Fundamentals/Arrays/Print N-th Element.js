function printNthElement(arr){

    let array = arr
    let numberOfRottations = array.pop()

    let rotatedNumbers = []

    for(let i = 0; i < array.length;i++){
        if(i % numberOfRottations === 0){
            rotatedNumbers.push(array[i])
        }
    }
    console.log(rotatedNumbers.join(' '))

}
printNthElement(['1', '2', '3', '4', '5', '6'])