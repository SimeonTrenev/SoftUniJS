function smallestOfThreeNumber(firstNumber, secondNumber, thirdNumber){

    let smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber);
    return smallestNumber

}
let result = smallestOfThreeNumber(2, 5, 3)
console.log(result)