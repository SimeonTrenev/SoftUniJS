function smallestNumber(firstNumber, secondNumber, thirdNumber){

    let nums = [firstNumber,secondNumber,thirdNumber];
    let smallNumber = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i]
        if(currentNumber < smallNumber){
            smallNumber = currentNumber
        }
    }
    return smallNumber;


}
console.log(smallestNumber(25,21,4))