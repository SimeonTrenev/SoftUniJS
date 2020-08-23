function distinctArray(array){

    let arr = array.slice();

    for(let i = 0; i < arr.length;i++){
        let currentElement = arr[i];
        for(let j = arr.length - 1;j > i;j--){
            let neededElement = arr[j];
            if(neededElement === currentElement){
                arr.splice(j,1)
            }
        }
    }
    console.log(arr.join(' '))


    // let arr = [];

    // for(let i = 0; i < input.length;i++){
    //     if(!arr.includes(input[i])){
    //         arr.push(input[i])
    //     }
    // }
    // console.log(arr.join(' '))

}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])


