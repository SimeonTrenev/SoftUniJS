function negativeOrPositive(array ){

    let myNewArray = [];

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
    // console.log(myNewArray.join('\n'))
}
negativeOrPositive([7, -2, 8, 9])