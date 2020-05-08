function lastKNumber(n, k){
    let arr = [1]
    for(let index = 1; index < n;index++){
        let target = index - k
        let sum = 0;
        if(target < 0){
            target = 0
        }

        arr.slice(target,index).forEach(x => sum += x)
        arr.push(sum)
    }
    console.log(arr.join(' '))
    

    
}
lastKNumber(6, 3)