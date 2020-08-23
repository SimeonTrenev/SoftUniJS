function primeNumberChecher(number){

    let result = true;

    for(let i = 2; i < number;i++){
        if(number % i === 0){
            result = false;
            break;
        }
    }
    console.log(result)
}
primeNumberChecher(2)