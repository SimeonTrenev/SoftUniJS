function summEvenNums(array){

    let sum = 0;
    for(let number of array){
        if(number % 2 === 0){
            sum += Number(number)
        }
    }
    console.log(sum)

}
summEvenNums(['2','4','6','8','10'])