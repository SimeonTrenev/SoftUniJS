function maxNumber(array = []){
    let resultArray = [];

    for(let i = 0; i < array.length;i++){
        let isTop = true
        let currentElement = array[i]
        let rightElement = array.slice(i + 1)
        for(let j = 0 ; j < rightElement.length;j++){
            if(currentElement <= rightElement[j]){
                isTop = false;
                break;
            }
        }
        if(isTop){
            resultArray.push(currentElement)
        }
    }
    console.log(resultArray.join(' '))
}
maxNumber([1, 4, 3, 2])