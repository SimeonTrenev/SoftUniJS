function sumOfOddNumber(n){

    let sum = 0
    for(let i = 1;i <= 100; i++){
        if(i % 2 === 1){
            console.log(i);
            sum += i
            n--;
            if(n === 0){
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumber(5)