function firstAndLastKNumbers(array){

    
    let element = array.shift();

    let fistElement = '';
    let lastElement = '';


    for(let i = 0; i < array.length;i++){
    fistElement = array.slice(0,element)
    lastElement = array.slice(array.length - element)
    
    }
    console.log(fistElement.join(' '))
    console.log(lastElement.join(' '))

}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   
    
   
    
   
    
   
   
    
   )