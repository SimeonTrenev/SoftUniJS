function rotateArray(arr){

    let array = arr;
    let numberOfRotation = array.pop()
    let realNumberOfRotation = Number(numberOfRotation) % Number(array.length);
    for(let i = 0; i < realNumberOfRotation;i++){
        let firstElement = array.pop()
        array.unshift(firstElement)
    }
    if(numberOfRotation === 'remove'){
        console.log('Empty')
    }else{
    console.log(array.join(' '))
    }
}
rotateArray(['remove', 'remove', 'remove'])