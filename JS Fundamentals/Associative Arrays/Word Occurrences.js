function wordOccurrences(array){

    let mapped = new Map();
    
    for(let elements of array){
        let count = 1;
        if(mapped.has(elements)){
            let oldCount = mapped.get(elements)
            let newestCount = oldCount + count
            mapped.set(elements,newestCount)
        }else{
            mapped.set(elements,count)
        }
    }
    
    let sorted = Array.from(mapped.entries()).sort((a,b) => {
        let countedNumbersA = a[1];
        let counterNumbersB = b[1]

        return counterNumbersB - countedNumbersA
    })
    
    for(let elements of sorted){
        console.log(`${elements[0]} -> ${elements[1]} times`)
    }
    


}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])