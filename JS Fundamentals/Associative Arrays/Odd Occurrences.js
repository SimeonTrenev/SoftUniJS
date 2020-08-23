function oddOccurrences(array){

    let input = array.split(' ')
    let obj = {};
    for(elements of input){
        
        let currentElement = elements.toLowerCase()
        if(Object.keys(obj).includes(currentElement)){
            obj[currentElement]++
        }else{
            obj[currentElement] = 1
        }
    }
    
    let iterated = Object.entries(obj).filter((x) => x[1] % 2 !== 0)
    
    let words = ''
    for(let keys of iterated){
        words += `${keys[0]} `
    }
    console.log(words)
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')