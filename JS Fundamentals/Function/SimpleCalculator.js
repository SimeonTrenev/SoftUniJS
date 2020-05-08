function simpleCalculator(firseNumber, secondNumber, separator){

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch(separator){
        case 'multiply':
        return multiply(firseNumber,secondNumber)
        case 'divide':
        return divide(firseNumber,secondNumber)
        case 'add':
        return add(firseNumber,secondNumber)
        case 'subtract':
        return subtract(firseNumber,secondNumber)
    }
}
let result = simpleCalculator(50, 13, 'subtract')
console.log(result)