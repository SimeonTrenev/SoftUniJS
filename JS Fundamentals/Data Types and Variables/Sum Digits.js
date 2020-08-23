function sumDigits(number){

    let nums = number
    let sum = 0;
    while(nums > 0){
        let currentDigit = nums % 10;
        sum += currentDigit
        nums = parseInt(nums / 10)
    }
    console.log(sum)

}
sumDigits(245678)