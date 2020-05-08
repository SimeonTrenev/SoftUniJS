function bombNumbers(array = [], bomb = []){

    let bombNum = bomb.shift()
    let power = bomb.shift()
    
    while(array.includes(bombNum)){
        let bombIndex = array.indexOf(bombNum)
        let startIndex = Math.max(bombIndex - power,0)
        array.splice(bombIndex,power+1)
        array.splice(startIndex,power)
    }
    
    // for(let i = 0;i < array.length;i++){
    //     if(array[i] === bombNum){
    //         let start = i - power
    //         array.splice(i,power+1)
    //         array.splice(start,power)
    //     }
    // }
    // let reducedNum = (acc,curva) => acc += curva;
    let acc = 0;
    for(let i = 0; i < array.length;i++){
        let curr = array[i]
        acc += curr
    }
    console.log(acc)

}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    
    
    
    )