function inventoryA(arr){

    let array = arr.slice();
    let inventory = array.shift().split(', ')
    
    for(let elements of array){
        let allComands = elements.split(' - ')
        let comands = allComands[0]
        let items = allComands[1]
        

        if(comands === 'Collect'){
            if(!inventory.includes(items)){
                inventory.push(items)
            }
        }else if(comands === 'Drop'){
            if(inventory.includes(items)){
                let index = inventory.indexOf(items)
                inventory.splice(index,1)
            }
        }else if(comands === 'Combine Items'){
            let splitedComands = items.split(':')
            let oldItem = splitedComands[0];
            let newItem = splitedComands[1];
            if(inventory.includes(oldItem)){
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1,0,newItem)
            }
        }else if(comands === 'Renew'){
            if(inventory.includes(items)){
                let index = inventory.indexOf(items)
                let oldItemPosition = inventory.splice(index,1)
                inventory.push(oldItemPosition)
            }
        }else if(comands === 'Craft!'){
            console.log(inventory.join(', '))
        }

    }
    

}
inventoryA([ 'Iron, Wood, Sword', 'Craft!', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])