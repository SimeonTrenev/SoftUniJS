function solve(input){

    let sum = +input.shift();
    let coins = 0;
    
    while(sum > 0){
        if(sum >= 2){
            sum -= 2;
        }else if(sum >= 1){
            sum -= 1;
        }else if(sum >= 0.5){
            sum -= 0.5;
        }else if(sum >= 0.2){
            sum -= 0.2
        }else if(sum >= 0.1){
            sum -= 0.1;
        }else if(sum >= 0.05){
            sum -= 0.05;
        }else if(sum >= 0.02){
            sum -= 0.02;
        }else{
            sum -= 0.01;
        }
        sum = Number(sum.toFixed(2));
        coins++;
    }
    console.log(coins)
}
solve(['0.56']);