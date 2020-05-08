function solve(input){

    let number1 = +input.shift();
    let number2 = +input.shift();
    let printLine = ''

    for(let i = number1;i <= number2;i++ ){
       let currentNum = '' + i
       let oddSum = 0;
       let evenSum = 0;
        for(let j = 0; j < currentNum.length;j++){
            let currentDigit = currentNum.charCodeAt(j)
            if(j % 2 === 0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
        }
        if(oddSum === evenSum){
            printLine += i + ' '
        }
    }
console.log(printLine)
}
solve(['100000', '100050'])