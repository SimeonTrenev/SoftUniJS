function addAndSubstract(array = []){

    // let myNewArray = [];
    // let sumFirsArray = 0;
    // let sumOfSecondArray = 0;
    // for(let i = 0; i < array.length;i++){
    //     let currentArrayNumber = array[i]
    //     sumFirsArray += currentArrayNumber
    //     if(currentArrayNumber % 2 === 0){
    //         currentArrayNumber += i
    //         sumOfSecondArray += currentArrayNumber
    //         myNewArray.push(currentArrayNumber)
    //     }else{
    //         currentArrayNumber -= i
    //         sumOfSecondArray += currentArrayNumber
    //         myNewArray.push(currentArrayNumber)
    //     }
        
    // }
    // console.log(myNewArray)
    // console.log(sumFirsArray)
    // console.log(sumOfSecondArray)

    let myNewArray = [];
    let sumFistArray = 0;
    let sumSecondArray = 0;
    array.map((number, index) =>{
        number % 2 === 0 ? number += index : number -= index
        myNewArray.push(number)
    })
    console.log(myNewArray)
    console.log(sumFistArray = array.reduce((sum, b) => sum + b, 0))
    console.log(sumSecondArray = myNewArray.reduce((sum, b) => sum + b, 0))

}
addAndSubstract([5, 15, 23, 56, 35])