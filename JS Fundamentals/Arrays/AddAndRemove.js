function addOrRemove(array = []){

    let myNewArray = []
    for(let i = 0; i < array.length;i++){
        if(array[i] === 'remove'){
            myNewArray.pop();
        }else if(array[i] === 'add'){
            myNewArray.push(i + 1)
        }
    }
    if(myNewArray.length === 0){
        console.log('Empty')
    }else{
        console.log(myNewArray.join(' '))
    }
    
}
addOrRemove(['remove', 'remove', 'remove'])