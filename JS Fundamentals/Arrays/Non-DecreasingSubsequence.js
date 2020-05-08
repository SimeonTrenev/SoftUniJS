function nonDecreasing(array = []){

    // let myNewArray = []
    // let max = Number.MIN_SAFE_INTEGER
    
    // for(let i = 0; i < array.length;i++){
    //     if(array[i] >= max){
    //         max = array[i]
    //         myNewArray.push(array[i])
    //     }
    // }
    // console.log(myNewArray.join(' '))

    let max = Number.MIN_SAFE_INTEGER
    // let arr = array.filter(num =>{
    //     if(num >= max){
    //         max = num;
    //         return true
    //     }
    //     return false
    // });
    
    let arr = array.filter(num =>{
        if(num >= max){
            max = num;
            return true
        }
        
    });
    
    console.log(arr.join(' '))
}
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24])