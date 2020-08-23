function wrongResult(firstNumber, secondNumber, thirdNumber){

let result = '';

if(firstNumber > 0 && secondNumber > 0 && thirdNumber < 0 || firstNumber > 0 && secondNumber < 0 && thirdNumber > 0 ||
    firstNumber < 0 && secondNumber > 0 && thirdNumber > 0 || firstNumber < 0 && secondNumber < 0 && thirdNumber < 0){
    result = 'Negative';
}else if( firstNumber > 0 && secondNumber > 0 && thirdNumber > 0 || firstNumber < 0 && secondNumber < 0 && thirdNumber > 0 ||
    firstNumber > 0 && secondNumber < 0 && thirdNumber < 0 || firstNumber < 0 && secondNumber > 0 && thirdNumber < 0 ||
    firstNumber === 0 || secondNumber === 0 || thirdNumber === 0){
    result = 'Positive';
}
return result;


}
console.log(wrongResult(-6, 0, -14))