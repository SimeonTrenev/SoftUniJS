function manipulation(array = []){

    let arr = array.shift()
    for(let i = 0; i < array.length;i++){
        if(array[i] === 'Add '){
            arr.push('3')
        }else if(array[i] === 'Remove'){
            arr.splice(0,2)
        }
    }
    console.log(arr)

}
manipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)