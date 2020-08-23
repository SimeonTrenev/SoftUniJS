function sumOfOdd(number){

    let summ = 0;

    for(let i = 1; i < number*2 ; i+=2){
        console.log(i)
        summ += i
    }
    console.log(`Sum: ${summ}`)
}
sumOfOdd(3)