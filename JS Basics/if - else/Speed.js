function solve(input){

    let x = Number(input.shift());

    if(x <= 10){
        console.log('slow');
    }else if(x > 10 && x <= 50){
        console.log('average');
    }else if(x > 50 && x <= 150){
        console.log('fast');
    }else if(x > 150 && x <= 1000){
        console.log('ultra fast');
    }else if(x > 1000){
        console.log('extremely fast');
    }


}

solve(['129']);