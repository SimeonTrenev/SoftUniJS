function negativeOrPositiveNumber(array = []){

    let myNewArray = []
    for(let i = 0; i < array.length;i++){
        if(array[i] < 0){
            myNewArray.unshift(array[i])
        }else{
            myNewArray.push(array[i])
        }
    }
    
    for(let i = 0; i < myNewArray.length;i++){
        console.log(myNewArray[i])
    }

}
negativeOrPositiveNumber([7, -2, 8, 9])