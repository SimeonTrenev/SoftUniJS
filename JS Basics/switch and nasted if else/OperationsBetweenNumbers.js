function solve(input){

    let n1 = +input.shift();
    let n2 = +input.shift();
    let operator = input.shift();
    let evenOrOdd = '';
    let sum = 0;

    if(operator === '+'){
        sum = n1 + n2;
        if(sum % 2 === 0){
            
            evenOrOdd = 'even'
        }else{
            evenOrOdd = 'odd'
        }
    }else if(operator === '-'){
        sum = n1 - n2;
        if(sum % 2 === 0){
            evenOrOdd = 'even'
        }else{
            evenOrOdd = 'odd'          
        }
    }else if(operator === '*'){
        sum = n1 * n2;
        if(sum % 2 === 0){
            evenOrOdd = 'even'
        }else{
            evenOrOdd = 'odd'      
        }
    }else if(operator === '/'){
             sum = n1 / n2;
    }else if(operator === '%'){
             sum = n1 % n2;
    }
   
   if(operator === '+' || operator === '-' || operator === '*'){
       console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`)
   }else if(operator === '/'){
       if(n2 === 0){
        console.log(`Cannot divide ${n1} by zero`)
       }else{
       console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`)}
   }else if(operator === '%'){
    if(n2 === 0){
        console.log(`Cannot divide ${n1} by zero`)
    }else{
    console.log(`${n1} % ${n2} = ${sum}`)
   }
   }
}

solve(['10', '0', '/']);