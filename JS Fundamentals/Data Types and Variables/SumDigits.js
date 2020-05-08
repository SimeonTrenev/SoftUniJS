function sumDigits(number){

    let sum = 0;
    let myNumber = number;
    while(myNumber > 0){
        let currentNumber = myNumber % 10;
        sum += currentNumber;
        myNumber = parseInt(myNumber / 10);
    }
    console.log(sum)
}
sumDigits(512)