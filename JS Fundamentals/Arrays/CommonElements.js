function commonElements(firstArray = [], secondArray = []){

    // for(let i = 0; i < firstArray.length;i++){
    //     let firstElement = firstArray[i]
    //     for(let j = 0; j < secondArray.length;j++){
    //         let secondElement = secondArray[j]
    //         if(firstElement === secondElement){
    //             console.log(firstElement)
    //         }
    //     }
    // }
    
   
    firstArray.map((element) =>{
        if(secondArray.includes(element)){
            console.log(element)
        }
    })

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)