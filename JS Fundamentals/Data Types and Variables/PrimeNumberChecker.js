function primeNumberChecker(number){

    let result = true
    for(let i = 2; i < number;i++){
        if(number % i === 0){
            result = false
        }
    }
    console.log(result)
}
primeNumberChecker(7)