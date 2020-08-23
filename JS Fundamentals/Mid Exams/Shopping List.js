function shopingList(arr){

    let array = arr.slice()
    let initialList = array.shift().split('!')
    
    for(let i = 0; i < array.length;i++){
        let currentComands = array[i].split(' ')
        let comands = currentComands[0]
        let items = currentComands[1]
        if(comands === 'Urgent'){
            if(!initialList.includes(items)){
                initialList.unshift(items)
            }
        }else if(comands === 'Unnecessary'){
            if(initialList.includes(items)){
                let index = initialList.indexOf(items)
                initialList.splice(index,1)
            }
        }else if(comands === 'Correct'){
            let newItems = currentComands[2]
            if(initialList.includes(items)){
                let index = initialList.indexOf(items)
                initialList.splice(index,1,newItems)
            }
        }else if(comands === 'Rearrange'){
            if(initialList.includes(items)){
                let index = initialList.indexOf(items)
                let rearrangedPossitionItem = initialList.splice(index,1)
                initialList.push(rearrangedPossitionItem)
            }
        }else if(items === 'Shopping!'){
            console.log(initialList.join(', '))
            break;
        }
    }
        


}
shopingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ])