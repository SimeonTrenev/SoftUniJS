function simpleCalculator(firstOperant, secondOperant, operator){

    let result = null;

    switch(operator){
        case 'multiply':
        result = (a,b) => a * b; 
        break;
        case 'divide':
        result = (a, b) => a / b;
        break;
        case 'add':
        result = (a, b) => a + b;
        break;
        case 'subtract':    
        result = (a, b) => a - b;
        break;
    }
    
    return result(firstOperant,secondOperant);

}
console.log(simpleCalculator(40, 8,'divide'))