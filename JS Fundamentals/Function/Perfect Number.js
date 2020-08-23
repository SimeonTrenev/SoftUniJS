function perfectNumber(number){


    let result = 0;
        let temp = '';
        for(let i = 1; i <= number/2;i++){
            if(number % i === 0){
                result += i
            }
        }

        if(result === number && result !== 0){
            temp = "We have a perfect number!"
        }else{
            temp = "It's not so perfect."
        }
        return temp;


}
console.log(perfectNumber(496))