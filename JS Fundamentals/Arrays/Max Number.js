function maxNumber(array){

    let maxElements = []

    for(let i = 0; i < array.length;i++){
        let currentElement = array[i]
        let booled = true;
        for(let j = i + 1; j < array.length;j++){
            let nextElement = array[j]
            if(nextElement >= currentElement){
                booled = false;
                break;
            }
        }
        if(booled){
            maxElements.push(currentElement)
        }
    }
    let str = ''
    for(let el of maxElements){
        str += el + " "
    }
    console.log(str)

}
maxNumber([1, 4, 3, 2])