function negativeOrPositiveNumber(array){

    let filtered = [];

    for(let el of array){
        if(el < 0){
            filtered.unshift(el);
        }else{
            filtered.push(el)
        }
    }
    console.log(filtered.join('\n'))
}
negativeOrPositiveNumber([3, -2, 0, -1])