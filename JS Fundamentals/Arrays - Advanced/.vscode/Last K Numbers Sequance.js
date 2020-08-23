function lastKNumbers(n, k){

    let array = [1];

    for(let index = 1; index < n ;index++){
        let target = index - k;
        let sum = 0;
        if(target < 0){
            target = 0
        }

        array.slice(target,index).forEach((x) => sum += x)
        array.push(sum)
    }

    console.log(array.join(' '))

}
lastKNumbers(6, 3)



