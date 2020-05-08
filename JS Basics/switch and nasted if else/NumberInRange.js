function solve(input){

    let x = +input.shift();
    if(x >= -100 && x <= 100 && x !== 0){
        console.log('Yes');
    }else{
        console.log('No');
    }

}

solve(['231']);