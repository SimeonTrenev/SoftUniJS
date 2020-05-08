function magicSum(array = [], magicNumber){

    let allMagicNumbers = [];

    for(let i = 0; i < array.length;i++){
        let currentElement = array[i]
        for(let j = i + 1;j < array.length;j++){
        let myCurrentElement = array[j]
        if(currentElement + myCurrentElement === magicNumber){
            console.log(`${currentElement} ${myCurrentElement}`)
        }
        }
    }
    
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )