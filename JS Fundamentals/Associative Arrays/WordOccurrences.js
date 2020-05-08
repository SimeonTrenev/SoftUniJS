function words(array = []){

    let mapped = new Map()
    let quantity = 1;

    for(let word of array){
        let words1 = word
    
        if(!mapped.has(words1)){
            mapped.set(words1,+quantity)
        }else{
            let currentQuantity = mapped.get(words1)
            let newQuantity = currentQuantity += quantity;
            mapped.set(words1,newQuantity)
        }
    }
    
    


    let sorted = Array.from(mapped).sort((a,b) => {
        return b[1] - a[1]
    })
   
    for(let [words,number] of sorted){
        console.log(`${words} -> ${number} times`)
    }

}
words(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])