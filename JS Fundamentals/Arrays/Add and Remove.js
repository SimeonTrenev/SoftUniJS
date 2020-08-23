function addAndRemove(arr){

    let array = arr;
    let numberedArray = [];
    let str = 1

    for(let i = 0; i < array.length;i++){
        let command = array[i]
        if(command === 'add'){
            numberedArray.push(str + i)
        }else if(command === 'remove'){
            numberedArray.pop()
        }
    }
    if(numberedArray.length === 0){
        console.log('Empty')
    }else{
    console.log(numberedArray.join(' '))
    }
}
addAndRemove(['add', 'add', 'add', 'add'])