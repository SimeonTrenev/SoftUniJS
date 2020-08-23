  function weaponSmith (input){
 
    let array = input.slice();

    let weaponName = array.shift().split('|')
    
    for(let elements of array){
        let currentCommands = elements.split(' ')
        let firstPartOfCommand = currentCommands[0]
        let secondPartOfCommand = currentCommands[1]
        let index = Number(currentCommands[2])

        if(firstPartOfCommand === 'Move' && secondPartOfCommand === 'Left'){
            if(weaponName.includes(weaponName[index]) && weaponName.includes(weaponName[index - 1])){
                let item = weaponName[index]
                weaponName.splice(index,1)
                weaponName.splice(index - 1,0,item)
            }
        }else if(firstPartOfCommand === 'Move' && secondPartOfCommand === 'Right'){
            if(weaponName.includes(weaponName[index]) && weaponName.includes(weaponName[index + 1])){
                let item = weaponName[index]
                weaponName.splice(index,1)
                weaponName.splice(index + 1,0,item)
            }
        }else if(firstPartOfCommand === 'Check' && secondPartOfCommand === 'Even'){
            let evenElements = '';
            for(let i = 0; i < weaponName.length;i++){
                if(i % 2 === 0){
                    evenElements += `${weaponName[i]} `
                }
            }
            console.log(evenElements)
        }else if(firstPartOfCommand === 'Check' && secondPartOfCommand === 'Odd'){
            let oddElements = '';
            for(let i = 0; i < weaponName.length;i++){
                if(i % 2 !== 0){
                    oddElements += `${weaponName[i]} `
                }
            }
            console.log(oddElements)
        }else if(firstPartOfCommand === 'Done'){
            console.log(`You crafted ${weaponName.join('')}!`)
            break;
        }
    }
   
    
    


    

}
weaponSmith([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'
  ])




// function weaponSmith(arr){

//     let array = arr.slice();
//     let weaponName = array.shift().split('|');
    
//     for(let i = 0; i < array.length;i++){
//         let allComands = array[i].split(' ')
//         let firstPartComand = allComands[0]
//         let secondPartComand = allComands[1]
//         let index1 = Number(allComands[2])
     

//         if(firstPartComand === 'Move' && secondPartComand === 'Left'){
//             if(weaponName.includes(weaponName[index1 - 1])){
//                 let leftPosition = weaponName.splice(index1 - 1,1,weaponName[index1])
//                 weaponName.splice(index1,1,leftPosition)
//             }
//         }else if(firstPartComand === 'Move' && secondPartComand === 'Right'){
//             if(weaponName.includes(weaponName[index1 + 1])){
//                 let rightPosition = weaponName.splice(index1 + 1,1,weaponName[index1])
//                 weaponName.splice(index1,1,rightPosition)
//             }
//         }else if(firstPartComand === 'Check' && secondPartComand === 'Even'){
//             let evenElements = '';
//             for(let i = 0; i < weaponName.length;i++){
//                 if(i % 2 === 0){
//                     evenElements += `${weaponName[i]} `
//                 }
//             }
//             console.log(evenElements)
//         }else if(firstPartComand === 'Check' && secondPartComand === 'Odd'){
//             let oddElements = '';
//             for(let i = 0; i < weaponName.length;i++){
//                 if(i % 2 !== 0){
//                     oddElements += `${weaponName[i]} `
//                 }
//             }
//             console.log(oddElements)
//         }else if(firstPartComand === 'Done'){
//             console.log(`You crafted ${weaponName.join('')}!`)
//         }
//     }



// }