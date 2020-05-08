function firstAndLastElements(array = []){

    
    let kNumber = array.shift();
    let sum = ''
    let numberOfIteration = ''
    for(let i = 0;i < array.length;i++){
        sum = array.slice(0,kNumber)
        numberOfIteration = array.slice(array.length - kNumber,array.length)
    }
    console.log(sum.join(' '))
    console.log(numberOfIteration.join(' '))
   
    
}
firstAndLastElements([2, 
    7, 8, 9]
    
   
    
)