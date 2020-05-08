function solve(input){

    let number = Number(input.shift());
    let inputType = input.shift();
    let outputType = input.shift();
    

    if(inputType === "mm" ){
        number = number / 10;
    }else if(inputType === "m"){
        number = number * 100;
    } 
    
    let result = 0;
    if(outputType === "mm"){
        result = number * 10;
    }else if(outputType === "m"){
        result = number / 100;
    }else if(outputType === "cm"){
        result = number;
    }

    console.log(result.toFixed(3));

}

solve(['12', 'mm', 'm']);