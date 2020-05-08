function distinct(array = []){

    let output = [];
    for(let i = 0; i < array.length;i++){
        if(!output.includes(array[i])){
            output.push(array[i])
        }
    }
    console.log(output.join(' '))
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])