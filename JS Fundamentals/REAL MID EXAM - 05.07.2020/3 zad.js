function solve(input){

    
    let array = input.split(' ').map(Number)
    
    let sum = 0;
    let numberOfNumber = 0
    for(let i = 0; i < array.length;i++){
        sum += array[i]
        numberOfNumber++;
    }
    let average = sum / numberOfNumber
    array.sort((a,b) => b - a)
    let biggerNumbers = []
    let isOver = 0;
    for(let j = 0; j < array.length;j++){
        if(array[j] > average){
            biggerNumbers.push(array[j])
            isOver++;
            if(isOver === 5){
                break;
            }
        } 
    }
    
    if(isOver === 0){
    console.log('No')
    }else{
    console.log(biggerNumbers.join(' '))
    }

}
solve('10 20 30 40 50')