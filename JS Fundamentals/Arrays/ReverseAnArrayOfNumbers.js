function reverseAnArrayOfNumbers(num, numbers){
    let arrayOfNewNumbers = []
    for(let i = 0; i < num;i++){
        arrayOfNewNumbers.push(numbers[i])
    }
    let result = ''
    for(let i = arrayOfNewNumbers.length - 1;i >= 0;i--){
        result += arrayOfNewNumbers[i] + ' '
    }
    console.log(result)
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])