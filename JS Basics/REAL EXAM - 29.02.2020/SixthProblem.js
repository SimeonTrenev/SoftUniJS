function solve(input){

    let magicNumber = +input.shift();
    let isMagicNumber = false;

    for(let a = 1; a <= 30;a++){
        for(let b = 1; b <= 30;b++){
            for(let c = 1; c <= 30;c++){
                sum = a + b + c;
                result = a * b * c;
                if(sum === magicNumber && a < b && b < c){
                    isMagicNumber = true;
                    console.log(`${a} + ${b} + ${c} = ${sum}`)    
                }
                if(result === magicNumber && a > b && b > c){
                    isMagicNumber = true;
                    console.log(`${a} * ${b} * ${c} = ${result}`)
                }

            }

            }
        }
        if(!isMagicNumber){
            console.log('No!')
        }

}
solve(['999']);