function gladiatorInventory(array){

    let arr = array.slice()
    let inventory = arr.shift().split(' ');
    
    for(let i = 0; i < arr.length;i++){
        let separated = arr[i].split(', ')
        let allComands = separated[0].split(' ')
        let comand = allComands[0]
        let equipment = allComands[1]
       
        if(comand === 'Buy'){
            if(!inventory.includes(equipment)){
                inventory.push(equipment)
            }
        }else if(comand === 'Trash'){
            if(inventory.includes(equipment)){
                let index = inventory.indexOf(equipment)
                inventory.splice(index,1)
            }
        }else if(comand === 'Repair'){
            if(inventory.includes(equipment)){
                let index = inventory.indexOf(equipment)
                let currentEquipment = inventory.splice(index,1)
                inventory.push(currentEquipment.join(' '))
            }
        }else if(comand === 'Upgrade'){
            let splitted = equipment.split('-')
            let equipChecked = splitted[0]
            let upgradet = splitted[1]
            if(inventory.includes(equipChecked)){
                let index = inventory.indexOf(equipChecked)
                let joineded = `${equipChecked}:${upgradet}`
                inventory.splice(index + 1,0,joineded)
            }
        }
    }
    console.log(inventory.join(' '))


}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)