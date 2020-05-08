function firstAndLastK(array = []){

    let firstKElement = array.shift();

    let firsElements = ''
    let lastElement = ''

    for(let i = 0; i < array.length;i++){
        firsElements = array.slice(0,firstKElement)
        lastElement = array.slice(array.length - firstKElement)
    }
    console.log(firsElements.join(' '))
    console.log(lastElement.join(' '))

}
firstAndLastK([2, 
    7, 8, 9]
    
   
    )