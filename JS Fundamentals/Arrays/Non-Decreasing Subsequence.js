function nonDecreasingSebs(arr){

    let array = arr;
    let max = Number.MIN_SAFE_INTEGER
    let filteredArray = [];
    for(let i = 0; i < array.length;i++){
        let current = array[i]
        if(current >= max){
            max = current
            filteredArray.push(max)
        }
    }
console.log(filteredArray.join(' '))
    // let array = arr;
    // let max = Number.MIN_SAFE_INTEGER
    // let filtered = array.filter((number)=>{
    //     if(number >= max){
    //         max = number
    //         return true
    //     }else{
    //         return false
    //     }
    // })
    // console.log(filtered.join(' '))
    

}
nonDecreasingSebs([ 1, 3, 8, 4, 10, 12, 3, 2, 24])