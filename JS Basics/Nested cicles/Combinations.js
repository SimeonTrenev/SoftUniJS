function solve(input){

    let n = +input.shift();
    let counter = 0;

    for(let i = 0; i <= 25; i++){
        for(let j = 0; j <= 25; j++){
            for(let x = 0; x <= 25; x++){
                let sum = i + j + x;
                if(i + j + x === n){
                    counter++;
                }
            }
        }
        
    }
    console.log(counter);
}
solve(['25'])