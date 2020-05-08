function printElements(array = []){

    let myNewLine = [];
    let index = array.pop()
    array.map((element,i) => {
        
        if(i % index === 0){
            myNewLine.push(element)
        }
    })
   console.log(myNewLine.join(' '))
   

}
printElements(['1', '2', '3', '4', '5', '6'])