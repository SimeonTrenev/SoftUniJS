function maxSequence(array){

    
    let bestSequence = []
for(let i = 0; i < array.length;i++){
    let currentElement = array[i]
    let currentSequence = []
    currentSequence.push(currentElement)
     
     
    for(let j = i + 1;j < array.length;j++){
        let nextElement = array[j]

        if(currentElement === nextElement){
            currentSequence.push(nextElement)
            
        }else{
            break;
        }
        
    }
    if(currentSequence.length > bestSequence.length){
        bestSequence = currentSequence
    }
}
    console.log(bestSequence.join(' '))
}
maxSequence([4, 4, 4, 4])